import { useContext } from "react";
import { AppContext } from "../features/AppContext";

const Pagination = () => {
  const { offset, studentResponse, setOffset } = useContext(AppContext);
  const { count = 0, result = [] } = studentResponse;

  const pages = Math.ceil(count / 5);

  return (
    <div className="table__pagination--container">
      <div className="table__pagination--count">
        Showing {result ? result.length : 0} out of {count} entries
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
