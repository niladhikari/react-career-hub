import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="grid justify-center items-center text-center mt-56">
            <h1 className="text-3xl font-bold mb-4">Oops .....</h1>
            <Link to={'./'}>
            <button className="p-3 font-bold bg-blue-700 rounded">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;