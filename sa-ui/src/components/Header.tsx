import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="table__header">
      <h1>
        Manage <span>Students</span>
      </h1>
      <div className="table__header--actions--container">
        <div className="btn btn-danger t-bold">
          <FontAwesomeIcon icon={faTrash} />
          Delete
        </div>
        <div className="btn btn-accept t-bold">
          <FontAwesomeIcon icon={faAdd} />
          Add New Student
        </div>
      </div>
    </div>
  );
};

export default Header;
