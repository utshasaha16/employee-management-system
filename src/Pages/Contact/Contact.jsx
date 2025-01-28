import {
  Breadcrumbs,
  Input,
  Textarea,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Employee | Contact Us</title>
    </Helmet>
      <section className="bg-blue-gray-800  text-white space-y-7 p-4 flex flex-col justify-center min-h-screen">
        <h1 className="text-6xl">Contact Us</h1>
        <p>
          Need help managing your employee records or navigating our system.
        </p>
        <Breadcrumbs className="bg-0 p-0 ">
          <Link to="/" className="text-[#FF885B]">
            Home
          </Link>
          <Link to="/dashboard" className="text-[#FF885B]">
            Dashboard
          </Link>
          <Link to="/contact" className="text-[#FF885B]">
            Contact
          </Link>
        </Breadcrumbs>
      </section>
      <section className="pt-20 ">
        <div className="md:flex gap-4 bg-base-100 shadow-2xl rounded-xl">
          {/* messege section */}
          <div className="md:w-2/4 w-full md:p-10 p-5">
            <h2 className="mb-6 text-2xl font-semibold">
              Ask us anything here
            </h2>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="e.g. name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Email Address
              </Typography>
              <Input
                size="lg"
                placeholder="e.g. name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mb-6">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Phone
              </Typography>
              <Input
                size="lg"
                placeholder="e.g.phone"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Message
              </Typography>
              <Textarea size="lg" label="Leave your message" />
            </div>
            <Button className="mt-3 bg-[#FF885B]">send message</Button>
          </div>
          {/* contact info */}
          <div className="md:p-10 p-5 md:w-2/4 w-full">
            <h2 className="mb-6 text-2xl font-semibold">Contact Info</h2>
            <div>
              <p className="uppercase hq font-semibold text-black text-sm">
                anfara hq
              </p>
              <div className="mt-3">
                <p>Anfra Inc, 06 Highley St, Victoria,</p>
                <p>Germany</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="uppercase hq font-medium text-black text-sm ">
                call us
              </p>
              <div className="mt-3">
                <p>Mobile: (+61) - 1990 - 6886</p>
                <p>Hotline: 1800 - 1102</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="uppercase hq font-medium text-black text-sm ">
                mail us
              </p>
              <div className="mt-3">
                <p>Info: ask@domain.com</p>
                <p>Support: employeemanagement@domain.com</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="uppercase hq font-medium text-black text-sm ">
                social network
              </p>
              <div className="flex gap-4 mt-3">
                <IconButton className="rounded bg-white">
                  <FaFacebookF className="text-lg text-[#3B59A5]"></FaFacebookF>
                </IconButton>
                <IconButton className="rounded bg-white">
                  <IoLogoTwitter className="text-lg text-[#1DA1F2]"></IoLogoTwitter>
                </IconButton>
                <IconButton className="rounded bg-white">
                  <FaInstagram className="text-lg text-[#ea4c89]"></FaInstagram>
                </IconButton>
                <IconButton className="rounded bg-white">
                  <FaLinkedin className="text-lg text-[#1DA1F2]"></FaLinkedin>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
