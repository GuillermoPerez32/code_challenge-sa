import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../features/AppContext";
import { createStudent, getAllStudents } from "../../services/students";

const ModalAdd = () => {
  const { formValues, handleChange } = useForm({
    email: "",
    first_name: "",
    last_name: "",
    age: 5,
    grade: "",
    priority: 1,
  });

  const { offset, setStudentResponse } = useContext(AppContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createStudent(formValues);
    setStudentResponse(await getAllStudents(offset));
  };

  return (
    <div className="modal__content">
      <div className="modal__field">
        <div>First Name</div>
        <input
          type="text"
          name="first_name"
          placeholder="first name"
          value={formValues.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Last Name</div>
        <input
          type="text"
          name="last_name"
          placeholder="last name"
          value={formValues.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Email</div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Age</div>
        <input
          type="number"
          name="age"
          min={0}
          value={formValues.age}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Grade</div>
        <input
          type="text"
          name="grade"
          placeholder="grade"
          value={formValues.grade}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Priority</div>
        <input
          type="text"
          name="priority"
          placeholder="priority"
          value={formValues.priority}
          onChange={handleChange}
        />
      </div>
      <div onClick={handleSubmit} className="btn btn-accept">
        Submit
      </div>
    </div>
  );
};

export { ModalAdd };
