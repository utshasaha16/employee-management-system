import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/icon/icon-logo.png.png"

const Footer = () => {
  const today = new Date();
  const courentYear = today.getFullYear()
  return (
    <div className="mt-24">
      <footer className="w-full bg-white pt-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img
            src={logo}
            alt="logo-ct"
            className="w-10"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to="/">
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-[#FF885B] focus:text-[#FF885B]"
                >
                  Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-[#FF885B] focus:text-[#FF885B]"
                >
                  Dashboard
                </Typography>
              </Link>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-[#FF885B] focus:text-[#FF885B]"
              >
                About
              </Typography>
            </li>
            <li>
              <Link to="/contact">
                <Typography
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-[#FF885B] focus:text-[#FF885B]"
                >
                  Contact Us
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-8" />
        <Typography color="blue-gray" className="text-center font-normal pb-8">
          &copy;  {courentYear} Material Tailwind
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
