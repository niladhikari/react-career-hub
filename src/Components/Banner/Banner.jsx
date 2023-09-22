const Banner = () => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <h1 className="text-7xl font-bold mb-4">One Step <br /> Closer To Your <br /> Dream Job</h1>
          <p className="font-medium mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="p-5 rounded-md bg-blue-600 text-white font-bold">Get Started</button>
        </div>
        <div>
          <img src="/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
