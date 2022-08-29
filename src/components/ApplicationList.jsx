import React from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";

const ApplicationList = () => {
  return (
    <div className="mt-12">
      {jobs.map((job) => {
        return (
          <Link to={`${job.id}`} key={job.id}>
            <div className="flex py-4 w-[95%] md:w-[70%]  my-10 rounded-lg border-2 cursor-pointer hover:shadow-md">
              <div className="-mt-2">
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="w-16 h-16"
                />
              </div>
              <div className="ml-4">
                <p className="uppercase font-bold text-xl">{job.companyName}</p>
                <p className="text-xs text-gray-600 mt-1">{job.jobRole}</p>
                <div className="flex items-center mt-4 text-sm">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      job.applicationStatus === "Accepted"
                        ? "bg-green-500"
                        : job.applicationStatus === "Rejected"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <p className="ml-2">{job.applicationStatus}</p>
                  <p className="ml-4">{job.dateApplied}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ApplicationList;
