import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../services/randomUserApi";

const Dashboard = () => {
  const { data, isFetching } = useGetUsersQuery();

  console.log(data);

  const globalUsers = data?.results;

  console.log(globalUsers);

  if (isFetching) return "Loading...";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto d-grid gap-3">
            {globalUsers.map((user, index) => {
              return (
                <Link to={`/hooman/${index}`} className="card col-md-6 mx-auto my-2 p-2 bg-light border" key={index}>
                  <div
                    className="mx-auto text-center"
                  >
                    <img
                      src={user.picture.thumbnail}
                      alt="user"
                      className="card-image"
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
      </div>
    </>
  );
};

export default Dashboard;
