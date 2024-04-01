import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../utils/localStorage";
import bg from "../assets/images/bg1.png";
import { FaLocationDot, FaMoneyBill } from "react-icons/fa6";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([]);

    useEffect(()=>{
        const storedId = getJobApplication();
        if(storedId.length>0){
            const appliedJob = jobs.filter(job=> storedId.includes(job.id))
            setAppliedJobs(appliedJob);
        }
    },[])

    return (
        <div className="space-y-5 pb-5">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="bg-contain bg-no-repeat bg-left-bottom min-h-[200px] flex justify-center items-center"
        >
          <h1 className="font-bold text-2xl">Applied Jobs</h1>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {
            appliedJobs.map((job) =>(
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

              </div>
            ))
          }
        </div>
       
  
      </div>
    );
};

export default AppliedJobs;