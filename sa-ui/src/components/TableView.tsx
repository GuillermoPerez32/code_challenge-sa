import Header from "./Header";
import Table from "./Table";
import Pagination from "./Pagination";
import { Modal } from "./Modal";

const TableView = () => {
  return (
    <div>
      <Modal />
      <div className="table__wrapper">
        <div className="table__container">
          <Header />
          <div className="table__content">
            <Table />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
