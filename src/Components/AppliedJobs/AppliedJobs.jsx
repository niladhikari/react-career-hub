import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import { AiOutlineDollar,AiOutlineDown } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //  const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className=" max-w-7xl mx-auto mt-20">
      <div className="text-right">
        <details className="dropdown mb-4">
          
          <summary className="m-1 btn">Filter By <AiOutlineDown></AiOutlineDown></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        {displayJobs.map((job) => (
          <div className="flex gap-8 items-center justify-center shadow-md m-auto py-6 mb-6" key={job.id}>
            <div className="bg-amber-50 px-4 pt-16 h-40 w-40 rounded-lg">
              <img className="w-36 m-auto" src={job.logo} alt="" />
            </div>
            <div className="flex justify-between gap-32 items-center">
              <div>
                <h1 className="font-bold">{job.job_title}</h1>
                <h2 className="font-medium">{job.company_name}</h2>
                <div className="text-left flex gap-4 py-4">
                  <button className="p-2 text-blue-500 font-semibold border-2 border-blue-400">
                    {job.remote_or_onsite}
                  </button>
                  <button className="p-2 text-blue-500 font-semibold border-2 border-blue-400">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex gap-8 justify-between text-left">
                  <div className="text-xl font-semibold flex items-center gap-2">
                    <HiOutlineLocationMarker></HiOutlineLocationMarker>
                    <p>{job.location}</p>
                  </div>
                  <div className="text-xl font-semibold flex items-center gap-2">
                    <AiOutlineDollar></AiOutlineDollar>
                    <p className="text-xl font-semibold">
                      $ Salary : {job.salary}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className="p-3 bg-blue-500 font-bold rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
