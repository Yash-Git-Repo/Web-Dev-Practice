import React, { useState } from "react";
import useTodos from "../../hooks/useTodos";
import useFetchUsers from "../../hooks/useFetchUsers";

const Users = () => {
  // const [page, setPage] = useState(1);
  const pageSize = 10;
  // const totalItems = 200;
  // const totalPages = Math.ceil(totalItems / pageSize);
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchUsers({ pageSize });

  return (
    <>
      <h3>Users Data</h3>
      {/* {isLoading && <Loader />} */}
      {error && <em>{error.message}</em>}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
          ))}
        </React.Fragment>
      ))}

      {/* Pagination  */}
      {/* <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            style={{ fontWeight: page === i + 1 ? "bold" : "normal" }}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        disabled={page === totalPages}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button> */}

      {hasNextPage && (
        <button disabled={isFetchingNextPage} onClick={fetchNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default Users;
