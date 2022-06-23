import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../services/randomUserApi";

const usersData = (users) => {
  return (
    <>
      {users?.map((user, index) => {
        return (
          <Link to={`/hooman/${index}`} className="card col" key={index}>
            <div className="text-center p-3">
              <img
                src={user.picture.large}
                alt="user"
                className="card-image p-1"
              />

              <div className="card-title">
                {user.name.first} {user.name.last}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

const Dashboard = () => {
  const { data: usersList, isFetching } = useGetUsersQuery();

  const [users, setUsers] = useState([]);
  console.log(users);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const pageNumberLimit = 10;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // filter
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredUsers = usersList?.results?.filter(
      (user) =>
        user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [usersList, searchTerm]);

  if (isFetching) return "Loading...";

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(users?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users?.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let nextPage = null;
  if (pages.length > maxPageNumberLimit) {
    nextPage = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let previousPage = null;
  if (minPageNumberLimit >= 1) {
    previousPage = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 25);
  };

  return (
    <>
      <div className="search-user">
        <input
          placeholder="Search User"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-1">
          {usersData(currentItems)}
        </div>
        <ul className="pageNumbers">
          <li>
            <button
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              Prev
            </button>
          </li>
          {previousPage}
          {renderPageNumbers}
          {nextPage}
          <li>
            <button
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
        <button onClick={handleLoadMore} className="loadmore">
          Load More
        </button>
      </div>
    </>
  );
};

export default Dashboard;
