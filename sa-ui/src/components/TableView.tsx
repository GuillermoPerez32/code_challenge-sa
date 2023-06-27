import React from "react";
import Header from "./Header";
import Table from "./Table";
import Pagination from "./Pagination";

const TableView = () => {
  return (
    <div className="table__wrapper">
      <div className="table__container">
        <Header />
        <div className="table__content">
          <Table />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default TableView;
