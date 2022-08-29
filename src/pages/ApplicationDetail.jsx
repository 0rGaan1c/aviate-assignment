import React from "react";
import { useParams } from "react-router-dom";
import ApplicationTimeline from "../components/ApplicationTimeline";
import Header from "../components/Header";
import Events from "../components/Events";
import JobDescription from "../components/JobDescription";
import Navbar from "../components/Navbar";
import jobs from "../data/jobs";

const ApplicationDetail = () => {
  const { id } = useParams();
  const job = jobs[id - 1];

  return (
    <>
      <Navbar />

      <div className="my-12 mx-[4%] md:flex">
        <div className="md:w-[70%]">
          <Header heading={job.companyName} />
          <ApplicationTimeline job={job} />
          <JobDescription job={job} />
        </div>
        <div className="md:w-[30%]">
          <Events events={job.events} />
        </div>
      </div>
    </>
  );
};

export default ApplicationDetail;
