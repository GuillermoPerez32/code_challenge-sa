import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../features/AppContext";
import { getAllStudents, updateStudent } from "../../services/students";
import { CreateStudentProps, Student } from "../../types/student";

type Props = {
  studentId: number;
};

const ModalEdit = ({ studentId }: Props) => {
  const { offset, setStudentResponse, studentResponse, modal } =
    useContext(AppContext);

  const { closeModal } = modal;

  const { id, ...studentValues } = studentResponse.result?.find(
    (student: Student) => student.id === studentId
  );

  const { formValues, handleChange } = useForm(studentValues);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    closeModal();
    await updateStudent(studentId, formValues as CreateStudentProps);
    setStudentResponse(await getAllStudents(offset));
  };

  return (
    <div className="modal__content">
      <div className="modal__field">
        <div>First Name</div>
        <input
          type="text"
          name="first_name"
          value={formValues.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Last Name</div>
        <input
          type="text"
          name="last_name"
          value={formValues.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="modal__field">
        <div>Email</div>
        <input
          type="email"
          name="email"
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
          value={formValues.grade}
          onChange={handleChange}
        />
      </div>
      <div onClick={handleSubmit} className="btn btn-accept">
        Submit
      </div>
    </div>
  );
};

export { ModalEdit };
