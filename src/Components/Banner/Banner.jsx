const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse  lg:flex-row items-center">
        <div>
          <h1 className=" text-center lg:text-left text-2xl mt-6 lg:mt-0   md:text-5xl  lg:text-7xl font-bold mb-4">
            One Step <br /> Closer To Your <br /> Dream Job
          </h1>
          <p className="font-medium mb-8 text-center lg:text-left">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <button className="p-5 rounded-md bg-blue-600 text-white font-bold ">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
