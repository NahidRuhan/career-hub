import { useLoaderData } from "react-router-dom";
import bg from "../../assets/images/bg1.png";
import { FaBriefcase, FaLocationDot, FaMoneyBill, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Job = () => {
  const job = useLoaderData();
  const { id,job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job.job;
  const [appliedJobs, setAppliedJobs] = useState([])
//   console.log(appliedJobs);

  return (
    <div className="space-y-5 pb-5">
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-contain bg-no-repeat bg-left-bottom min-h-[200px] flex justify-center items-center"
      >
        <h1 className="font-bold text-2xl">Job Details</h1>
      </div>
      <div className="flex gap-4">
        <div className="basis-4/6 space-y-5">
            <p><span className="font-bold">Job Description: </span>{job_description}</p>
            <p><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
            <p className="font-bold">Educational Requirements: </p>
            <p>{educational_requirements}</p>
            <p className="font-bold">Experience: </p>
            <p>{experiences}</p>
        </div>
        <div className="bg-slate-300 space-y-5 basis-2/6 p-5">
            <h1 className="font-bold">Job Details</h1>
            <div className="divider"></div>
            {/* <p className="flex items-center"><span className="font-bold"><FaMoneyBill /> Salary: </span>{salary}</p>
            <p className="flex items-center"><span className="font-bold"><FaBriefcase /> Job Title: </span>{job_title}</p> */}
            <p className="flex items-center gap-3">
                <span><FaMoneyBill /></span>
                <span className="font-bold">Salary: </span>
                <span>{salary}</span>
            </p>
            <p className="flex items-center gap-3">
                <span><FaBriefcase /></span>
                <span className="font-bold whitespace-nowrap">Job Title: </span>
                <span>{job_title}</span>
            </p>
            <h1 className="font-bold">Contact Information</h1>
            <div className="divider"></div>
            <p className="flex items-center gap-3"><span><FaPhone /></span><span className="font-bold">Phone: </span>{contact_information.phone}</p>
            <p className="flex items-center gap-3"><span><MdEmail /></span><span className="font-bold">Email: </span>{contact_information.email}</p>
            <p className="flex items-center gap-3"><span><FaLocationDot /></span><span className="font-bold">Location: </span>{contact_information.address}</p>
            <button onClick={()=> setAppliedJobs([...appliedJobs,id])} className="btn btn-primary w-full bg-[#7E90FE] text-white">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
