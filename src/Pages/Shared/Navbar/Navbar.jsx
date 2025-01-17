import { Link } from "react-router-dom";
import logo from "../../../assets/icon/icon-logo.png.png";

import React, { useContext, useEffect, useState } from "react";
import {
  Navbar as MtNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { AuthContext } from "../../../Provider/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/">Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/dashboard" className="flex items-center">
          Dashboard
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/secret" className="flex items-center">
          secret
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <MtNavbar className="shadow-none h-max max-w-full rounded-none px-4 py-2 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <img className="w-10" src={logo} alt="" />
            <Link to="/">
              <Typography
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                Employee Management
              </Typography>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <p>{user?.email}</p>

              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="bg-black p-4 text-white"
                  >
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Register</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Link to="/login">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Register</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </MtNavbar>
    </div>
  );
};
