import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../features/AppContext";
import { deleteStudent, getAllStudents } from "../services/students";
import { ModalEdit } from "./modals/ModalEdit";

const Table = () => {
  const { studentResponse, offset, setStudentResponse, modal } =
    useContext(AppContext);
  const { openModal } = modal;

  const { result } = studentResponse;

  const handleDelete = async (id: number) => {
    if (window.confirm("Do you really want to delete it?")) {
      await deleteStudent(id);
      setStudentResponse(await getAllStudents(offset));
    }
  };
  const handleEdit = (id: number) => {
    openModal(<ModalEdit studentId={id} />);
  };

  return (
    <div className="table__table-container">
      <div className="table__table-head">
        <div className="th cell cell-check">
          <input
            type="checkbox"
            name="checkall"
            id="checkall"
            className="checkbox"
          />
        </div>
        <div className="th cell cell--first-name">First Name</div>
        <div className="th cell cell--last-name">Last Name</div>
        <div className="th cell cell--email">Email</div>
        <div className="th cell cell--age">Age</div>
        <div className="th cell cell--grade">Grade</div>
        <div className="th cell cell--actions">Actions</div>
      </div>
      {result &&
        result.map((e: any) => (
          <div key={e.id}>
            <hr />
            <div className="table__row">
              <div className="th cell cell-check">
                <input
                  type="checkbox"
                  name="checkall"
                  id="checkall"
                  className="checkbox"
                />
              </div>
              <div className="cell cell--first-name">{e.first_name}</div>
              <div className="cell cell--last-name">{e.last_name}</div>
              <div className="cell cell--email">{e.email}</div>
              <div className="cell cell--age">{e.age}</div>
              <div className="cell cell--grade">{e.grade}</div>
              <div className="cell cell--actions action--buttons">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="action action--edit"
                  onClick={() => handleEdit(e.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="action action--delete"
                  onClick={() => handleDelete(e.id)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Table;
