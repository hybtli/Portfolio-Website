import React from "react";

const TimeLine = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold md:text-4xl">Timeline</h2>
      <div className="space-y-8">
        {/* -- 2022 -- */}
        <div>
          <h3 className="mb-3 text-lg font-bold md:text-xl">2022 - </h3>
          <ul className="space-y-4">
            <li className="ml-2 space-y-1">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Checkmark"
                  className="w-4 h-4 mr-2 dark:text-violet-400"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </g>
                </svg>
                <h4 className="font-medium">DELTA Smart Technologies</h4>
              </div>
              <ul className="ml-6 dark:text-gray-400">
                <li>
                  I've developed and maintained complicated web apps, including
                  responsive designs and interactive interfaces, as a frontend
                  developer.
                </li>
                <br />
                <li>
                  Working with cross-functional teams has helped me get better
                  at communicating, managing projects, and solving problems.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* -- 2019 -- */}
        <div>
          <h3 className="mb-3 text-lg font-bold md:text-xl">2019 - 2023</h3>
          <ul className="space-y-4">
            <li className="ml-2 space-y-1">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Checkmark"
                  className="w-4 h-4 mr-2 dark:text-violet-400"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </g>
                </svg>
                <h4 className="font-medium">Izmir Institute of Technology</h4>
              </div>
              <p className="ml-6 dark:text-gray-400">
                I was entitled to enter the Department of Computer Engineering
                by achieving Türkiye Scholarships.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
