import PropTypes from "prop-types";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl p-10">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{job_title}</h2>
          <p className="text-left text-xl font-semibold">{company_name}</p>
          <div className="text-left flex gap-4 py-4">
            <button className="p-2 text-blue-500 font-semibold border-2 border-blue-400">
              {remote_or_onsite}
            </button>
            <button className="p-2 text-blue-500 font-semibold border-2 border-blue-400">
              {job_type}
            </button>
          </div>
          <div className="flex gap-8 justify-between text-left">
            <div className="text-xl font-semibold flex items-center gap-2">
              <HiOutlineLocationMarker></HiOutlineLocationMarker>
              <p>{location}</p>
            </div>
            <div className="text-xl font-semibold flex items-center gap-2">
              <AiOutlineDollar></AiOutlineDollar>
              <p className="text-xl font-semibold">$ Salary : {salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};
export default Job;
