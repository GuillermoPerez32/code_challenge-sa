import { Axios } from "axios"
import { CreateStudentProps } from "../types/student"

const client = new Axios({baseURL: '127.0.0.1:3001/api/students'})

export const createStudent = async (student: CreateStudentProps) => { 

}
 
export const getAllStudents = async (offset:number) => { 
    const students = await client.get('/', {
        params: {
            limit:5,
            offset,
        },
    }) 
    return students;
}
 
export const updateStudent = async (id:number, student: CreateStudentProps) => { 
    
}
 
export const deleteStudent = async (id:number) => { 
    
}
