import React from "react";

const JobDescription = ({ job }) => {
  return (
    <div className="rounded-md border-2 mt-10 p-4 w-[90%]">
      <h2 className="font-medium text-lg mb-4">Job Description</h2>

      {job.jobDescription.map((jobDesc, idx) => {
        return (
          <p key={idx} className="text-sm my-2">
            • {jobDesc}
          </p>
        );
      })}
    </div>
  );
};

export default JobDescription;
