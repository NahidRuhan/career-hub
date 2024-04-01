import { useState } from "react";
import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Jobs = ({ jobs }) => {
  const [show,setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="space-y-7">
        <h1 className="text-5xl font-bold text-center">Featured Jobs</h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-10">
          {
            (show ? jobs : jobs.slice(0,4)).map((job) =>(
              <div key={job.id} className="h-full space-y-3">

                <img className="h-[70px] w-auto" src={job.logo} alt="" />
                <h2 className="font-bold text-lg">{job.job_title}</h2>
                <h2>{job.company_name}</h2>
                <div className="flex gap-3">
                  <div className="badge badge-secondary badge-outline p-5">{job.remote_or_onsite}</div>
                  <div className="badge badge-secondary badge-outline p-5">{job.job_type}</div>
                </div>
                <div className="flex gap-3">
                  <p className="flex items-center gap-2"><span><FaLocationDot /></span>{job.location}</p>
                  <p className="flex items-center gap-2"><span><FaMoneyBill /></span>{job.salary}</p>
                </div>
                <div>
                  <button onClick={()=> navigate(`/featured-jobs/${job.id}`)} className="btn btn-primary bg-[#7E90FE]">View Details</button>
                </div>

              </div>
            ))
          }
        </div>
        <div className="flex justify-center pt-5">
          { !show && <button onClick={()=> setShow(!show)} className="btn btn-primary bg-[#7E90FE]">Show All</button>}
        </div>
      </div>
    </>
  );
};

export default Jobs;
