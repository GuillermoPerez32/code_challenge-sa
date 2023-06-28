import axios from "axios";
import { useEffect, useState } from "react";
import { StudentResponse } from "../types/student";

export const useAppContext = () => {
    const [studentResponse, setStudentResponse] = useState<StudentResponse | null>(null);

    useEffect(() => {
        axios
            .get("https://tuboliteros.com/api/mialottery/")
            .then(({ data }) => {
                setStudentResponse(data);
            });
    }, [])
    

    return {studentResponse, setStudentResponse}
};