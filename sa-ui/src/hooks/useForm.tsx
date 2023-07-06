import { useState } from "react";
import { CreateStudentProps } from "../types/student";

const useForm = <T extends CreateStudentProps>(initialValues: T) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    const valueFixed = name === "age" || name === "priority" ? parseInt(value) : value;

    setFormValues({ ...formValues, [name]: valueFixed });
  };

  return {
    formValues,
    handleChange,
  };
};

export { useForm };
