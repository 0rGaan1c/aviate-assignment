import React from "react";

const ApplicationTimeline = ({ job }) => {
  return (
    <div className="rounded-md border-2 mt-10 p-4 w-[90%] text-sm">
      <h2 className="text-lg mb-3 font-medium">Application Timeline</h2>

      <p>{job.jobRole}</p>

      <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-8">
        {job.applicationTimeline[0] ? (
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-1.5 justify-center items-center w-3 h-3 bg-gray-500 rounded-full"></span>
            <h3 class="flex items-center mb-1 font-semibold">Applied</h3>
            <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              {job.applicationTimeline[0]}
            </time>
          </li>
        ) : null}
        {job.applicationTimeline[1] ? (
          <li class="mb-10 ml-6">
            <span class="flex absolute -left-1.5 justify-center items-center w-3 h-3 bg-yellow-500 rounded-full"></span>
            <h3 class="flex items-center mb-1 font-semibold">Reviewing</h3>
            <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              {job.applicationTimeline[1]}
            </time>
          </li>
        ) : null}
        {job.applicationTimeline[2] ? (
          <li class="mb-10 ml-6">
            <span
              class={`flex absolute -left-1.5 justify-center items-center w-3 h-3 ${
                job.applicationStatus === "Rejected"
                  ? "bg-red-500"
                  : "bg-green-500"
              } rounded-full`}
            ></span>
            <h3 class="flex items-center mb-1 font-semibold">
              {job.applicationStatus}
            </h3>
            <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              {job.applicationTimeline[2]}
            </time>
          </li>
        ) : null}
      </ol>
    </div>
  );
};

export default ApplicationTimeline;
