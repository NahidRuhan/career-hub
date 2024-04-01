import hardy from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div className="flex">
      <div className="flex flex-col space-y-7">
        <h1 className="text-7xl">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information
          you need. Its your future. Come find it. Manage all your job
          application from start to finish.
        </p>
        <div>
          <button className="btn btn-primary bg-[#7E90FE] text-white">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <img className='w2' src={hardy} alt="" />
      </div>
    </div>
  );
};

export default Banner;
