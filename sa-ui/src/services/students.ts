import axios from "axios"
import { CreateStudentProps, StudentResponse } from "../types/student"


export const createStudent = async (createStudent: CreateStudentProps) => { 
    try {
        await axios.post<StudentResponse>('http://127.0.0.1:3001/api/students/', createStudent)
        return true;
    }
    catch {
        return false;
    }
}
 
export const getAllStudents = async (offset:number): Promise<StudentResponse>  =>  { 
    const students = await axios.get<StudentResponse>('http://127.0.0.1:3001/api/students/', {
        params: {
            limit:5,
            offset,
        },
    }) 
    
    return students.data;
}
 
export const updateStudent = async (id:number, updateStudent: CreateStudentProps) => { 
    try {
        await axios.patch<StudentResponse>(`http://127.0.0.1:3001/api/students/${id}`, updateStudent)
        return true;
    }
    catch {
        return false;
    }
}
 
export const deleteStudent = async (id: number) => { 
    
    try {
        await axios.delete<StudentResponse>(`http://127.0.0.1:3001/api/students/${id}`)
        return true;
    }
    catch {
        return false;
    }
}
