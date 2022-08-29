import React from "react";
import Header from "../components/Header";
import ApplicationList from "../components/ApplicationList";
import Navbar from "../components/Navbar";

const Applications = () => {
  return (
    <>
      <Navbar />
      <div className="my-12 mx-[4%]">
        <Header />
        <ApplicationList />
      </div>
    </>
  );
};

export default Applications;
