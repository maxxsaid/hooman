import React from "react";
import { useGetUsersQuery } from "../services/randomUserApi";

const Dashboard = () => {
  const { data, isFetching } = useGetUsersQuery();

  console.log(data);
  
  return (
    <>
      <div></div>
    </>
  );
};

export default Dashboard;
