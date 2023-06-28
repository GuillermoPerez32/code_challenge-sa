import { useState } from "react";
import { StudentResponse } from "../types/student";

export const useAppContext = () => {
    const [studentResponse, setStudentResponse] = useState<StudentResponse | null>(null);
    const [offset, setOffset] = useState(0);
    

    return {studentResponse, setStudentResponse, setOffset, offset}
};