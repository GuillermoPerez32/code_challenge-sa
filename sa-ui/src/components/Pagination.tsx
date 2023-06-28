import { useContext } from "react";
import { AppContext } from "../features/AppContext";

const Pagination = () => {
  const { offset, studentResponse, setOffset } = useContext(AppContext);
  const { count } = studentResponse;

  const pages = count % 5 === 0 ? count / 5 : Math.floor(count / 5) + 1;

  return (
    <div className="table__pagination--container">
      <div className="table__pagination--count">
        Showing 5 out of {count} entries
      </div>
      <div className="table__pagination--buttons">
        <span>Previous</span>
        {Array.from(Array(pages)).map((item, index) => (
          <div
            key={index}
            className={`btn ${index === offset && "btn-pagination"}`}
            onClick={() => setOffset(index)}
          >
            {index}
          </div>
        ))}
        <span>Next</span>
      </div>
    </div>
  );
};

export default Pagination;
