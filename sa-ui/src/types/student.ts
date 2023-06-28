export interface StudentResponse {
    count:  number;
    result: Student[];
}

export interface Student {
    id:         number;
    first_name: string;
    last_name:  string;
    email:      string;
    age:        number;
    grade:      string;
}

export interface CreateStudentProps {
    first_name?: string;
    last_name?:  string;
    email?:      string;
    age?:        number;
    grade?:      string;
}
