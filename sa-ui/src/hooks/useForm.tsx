import { useState } from "react";

const useForm = (initialState: any) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return {
    formValues,
    handleChange,
  };
};

export { useForm };
