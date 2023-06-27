import React from "react";

const Table = () => {
  return (
    <div className="table__table-container">
      <div className="table__table-head">
        <div className="th col-check">
          <input
            type="checkbox"
            name="checkall"
            id="checkall"
            className="checkbox"
          />
        </div>
        <div className="th col-name">Name</div>
        <div className="th col-email">Email</div>
        <div className="th col-address">Address</div>
        <div className="th col-phone">Phone</div>
        <div className="th col-actions">Actions</div>
      </div>
    </div>
  );
};

export default Table;
