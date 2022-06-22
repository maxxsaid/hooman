import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../services/randomUserApi";

const Dashboard = () => {
  const { data: usersList, isFetching } = useGetUsersQuery();

  
  const [users, setUsers] = useState([]);
  console.log(users);
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
