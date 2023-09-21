import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  console.log(job);
  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <div></div>
      <div className="grid gap-6 md:grid-cols-5">
        <div className=" md:col-span-3">
          <h2>
            <span className="font-bold">Job Description :</span>{" "}
            {job.job_description}
          </h2>
          <p className="my-6">
            <span className="font-bold">Job Responsibility : </span>
            {job.job_responsibility}
          </p>
          <h2 className="font-bold">Educational Requirements :</h2>
          <p>{job.educational_requirements}</p>
          <h3 className="font-bold mt-6">Experiences :</h3>
          <p>{job.experiences}</p>
        </div>
        <div className="border   md:col-span-2">
          <div className="bg-violet-100 p-7 text-center">
            <h2 className="text-xl text-left font-bold pb-6 border-b-2 border-blue-200">
              Job Details
            </h2>
            <div className="text-xl font-semibold flex text-center items-center gap-2 pt-6">
              <div>
                <AiOutlineDollar></AiOutlineDollar>
              </div>
              <p>
                Salary :{" "}
                <span className="text-gray-400">{job.salary} (Per Month)</span>
              </p>
            </div>
            <div className="text-xl font-semibold flex text-center items-center gap-2 pt-3">
              <div>
                <BiBookContent></BiBookContent>
              </div>
              <p>
                Job Title :{" "}
                <span className="text-gray-400">{job.job_title}</span>
              </p>
            </div>
            <h2 className="pt-6 text-left text-xl font-bold pb-6 border-b-2 border-blue-200">
              Contact Information
            </h2>
            <div className="text-xl font-semibold flex text-center items-center gap-2 pt-6">
              <div>
                <AiOutlinePhone></AiOutlinePhone>
              </div>
              <p>
                Phone :{" "}
                <span className="text-gray-400">{job.contact_information.phone}</span>
              </p>
            </div>
            <div className="text-xl font-semibold flex text-center items-center gap-2 pt-3">
              <div>
                <AiOutlineMail></AiOutlineMail>
              </div>
              <p>
                Email :{" "}
                <span className="text-gray-400">{job.contact_information.email}</span>
              </p>
            </div>

            <div className="text-xl font-semibold flex text-center  gap-2 pt-3">
              <div>
                <CiLocationOn></CiLocationOn>
              </div>
              <p>
              Address :{" "}
                <span className="text-gray-400">{job.contact_information.address}</span>
              </p>
            </div>

          </div>
          <button className="btn btn-primary w-full mt-6">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
