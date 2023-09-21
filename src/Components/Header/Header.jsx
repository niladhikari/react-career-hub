import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
     <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/job"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500" : ""
                }
              >
                Job
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/applied"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500" : ""
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-500" : ""
                }
              >
                Blog
              </NavLink>
            </li>
    </>
  return (
    <div className="bg-violet-300">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-400 font-bold">Star Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
