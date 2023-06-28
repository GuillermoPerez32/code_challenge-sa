import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Table = () => {
  const students = [
    {
      id: 2,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 3,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 4,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 5,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 6,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 7,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 8,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 9,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 10,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 11,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
    {
      id: 12,
      first_name: "asdsa",
      last_name: "asdsa",
      email: "asdsa@asd.sd",
      age: 25,
      grade: "1nd",
    },
  ];
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
      {students.map((e) => (
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
              <FontAwesomeIcon icon={faEdit} className="action action--edit" />
              <FontAwesomeIcon
                icon={faTrash}
                className="action action--delete"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
