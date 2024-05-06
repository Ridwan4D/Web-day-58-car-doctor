import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>{" "}
      <li>
        <NavLink to="/bookings">My Bookings</NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logout().then(() => {
      toast.success("Logged Out");
    });
  };
  return (
    <div>
      <nav className="navbar bg-base-100" id="navSide">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} width="70" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#444444] text-lg font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="py-2 px-2 font-medium text-[#FF3811] border-2 border-[#FF3811] bg-transparent rounded-none">
              Appointment
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="py-2 px-2 font-medium text-white border-2 border-[#FF3811] ml-2 bg-[#FF3811] rounded-none"
              >
                Logout
              </button>
            ) : (
              <button className="py-2 px-2 font-medium text-white border-2 border-[#FF3811] ml-2 bg-[#FF3811] rounded-none">
                <NavLink to="/login">Login</NavLink>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
