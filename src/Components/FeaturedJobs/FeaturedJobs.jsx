import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
   const [jobs,setJobs] = useState([]);

   useEffect(() =>{
    fetch('/public/jobs.json')
    .then(res=> res.json())
    .then(data=> setJobs(data))
   },[])


    return (
        <div className="text-center mt-32 mb-32">
            <h2 className="text-5xl font-bold mb-4">Featured Jobs</h2>
            <p className="font-medium text-base mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5 items-center">
            {
               jobs.map(job=> <Job key={job.id} job={job}></Job>) 
            }
            </div>
        </div>
    );
};

export default FeaturedJobs;