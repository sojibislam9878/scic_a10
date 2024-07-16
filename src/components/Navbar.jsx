// import { a, a } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
//  const { user, logout } = useAuth();
const {user}=useAuth()
const [isChecking, setIsChecking] = useState(true);
// const user = true;
const {handleLogout}=useAuth()

const handleBalance = () => {
  setIsChecking(!isChecking);
  // This will log the current state (before toggle)
  console.log('Before timeout:', isChecking);
  setTimeout(() => {
    setIsChecking(true);
    // This will log the state after the timeout has set it to false
    console.log(isChecking);
  }, 2000);
};
  return (
    <div className="sticky top-0 z-40 bg-[#E2126F] shadow-xl ">
      <div className="navbar bg-[#E2126F] container mx-auto p-4 ">
        <div className="navbar-start">
          {/* <div className="dropdown">
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
              className=" menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activea : normala
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  to="/apartment"
                  className={({ isActive }) =>
                    isActive ? activea : normala
                  }
                >
                  Apartment
                </a>
              </li>
              {!user && (
                <div className="mt-4">
                  <a to="/login">
                    <button className="btn bg-[#003366] text-white font-bold hover:bg-[#082c50] w-full md:hidden">
                      Login
                    </button>
                  </a>
                </div>
              )}
            </ul>
          </div> */}
          <a
            to="/"
            className="btn btn-ghost md:text-3xl text-xl font-play text-[#ffffff]"
          >
            E-cash
          </a>
          {/* <a to="/">
          <div className="lg:w-2/6 md:w-3/6 ml-4 cursor-pointer">
                <img className="w-[1000px] h-[70px] object-cover" src="logo.png" alt="" />
              </div>
          </a> */}
        </div>
        <div className="navbar-center hidden md:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a
                to="/"
                className={({ isActive }) =>
                  isActive ? activea : normala
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                to="/apartment"
                className={({ isActive }) =>
                  isActive ? activea : normala
                }
              >
                Apartment
              </a>
            </li>
          </ul> */}

          <div>
          {isChecking ? (
        <button onClick={handleBalance} className="bg-white py-3 px-44 rounded-full">
          hello
        </button>
      ) : (
        <div className="bg-white py-3 px-44 rounded-full">200</div>
      )}
            
          </div>

        </div>
        <div className="navbar-end flex ">
          {user ? (
            <div className=" flex justify-center gap-2 pr-2 md:pr-0">
              <div className="dropdown dropdown-end mt-1">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-30 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user.photoURL || "https://i.ibb.co/4SrK9pD/profile.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li className="text-center text-lg font-bold mb-6 mt-3">
                    {user.name}
                  </li>
                  <li>
                    <a to="/dashboard" className="text-lg mb-4 font-semibold">History</a>
                  </li>
                  <li>
                  <button
                onClick={handleLogout}
                className="btn mt-1 bg-[#003366] text-white font-bold hover:bg-[#072644]"
              >
                Logout
              </button>
                  </li>
                </ul>
              </div>
              
            </div>
          ) : (
            <div className="hidden md:flex">
              <div>
                <a to="/login">
                  <button className="btn bg-[#003366]  hover:bg-[#0b2641] text-white font-bold">
                    Login
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
