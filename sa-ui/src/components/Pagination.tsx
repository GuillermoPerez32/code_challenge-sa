const Pagination = () => {
  const pages = 5;
  const currentPage = 3;
  return (
    <div className="table__pagination--container">
      <div className="table__pagination--count">
        Showing 5 out of 25 entries
      </div>
      <div className="table__pagination--buttons">
        <span>Previous</span>
        {Array.from(Array(pages)).map((item, index) => (
          <div
            key={index}
            className={`btn ${index === currentPage && "btn-pagination"}`}
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
