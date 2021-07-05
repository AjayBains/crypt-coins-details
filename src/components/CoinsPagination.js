import React from "react";
import { Pagination } from "react-bootstrap";

const CoinsPagination = ({ page, setPage }) => {
  function goToPageBy(amount) {
    setPage((prevPage) => prevPage + amount);
  }
  return (
    <Pagination>
      <Pagination.First onClick={() => setPage(1)} />
      {page >= 2 && <Pagination.Prev onClick={() => goToPageBy(-1)} />}
      <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>
      {/* <Pagination.Item onClick={() => setPage(2)}>{2}</Pagination.Item> */}
      {page > 3 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => goToPageBy(-1)}>
          {page - 1}
        </Pagination.Item>
      )}
      {page >= 2 && <Pagination.Item active>{page}</Pagination.Item>}
      {page > 2 && (
        <Pagination.Item onClick={() => goToPageBy(1)}>
          {page + 1}
        </Pagination.Item>
      )}

      <Pagination.Ellipsis />
      <Pagination.Next onClick={() => goToPageBy(1)} />
    </Pagination>
  );
};

export default CoinsPagination;
