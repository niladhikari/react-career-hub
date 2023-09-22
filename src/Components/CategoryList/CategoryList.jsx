import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div className="text-center mt-32">
            <h2 className="text-5xl font-bold mb-4">Job Category List</h2>
            <p className="font-medium text-base mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-10 justify-center items-center">
                {
                    jobs.map(job=> <Category key={job.id} job={job}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;