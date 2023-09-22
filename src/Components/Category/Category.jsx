import PropTypes from "prop-types";
const Category = ({ job }) => {
  const { logo, category_name, availability } = job;
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-200 to-blue-200 p-10 rounded-md">
        <div className=""> 
          <img className="pb-8" src={logo} alt="" />
        </div>
        <h1 className="pb-2 font-bold">{category_name}</h1>
        <p className="text-gray-400">{availability}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Category;
