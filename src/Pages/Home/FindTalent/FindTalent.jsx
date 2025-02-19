import image from "../../../assets/find-employee/employee-manage.jpg";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TbTargetArrow } from "react-icons/tb";
import { AiFillRocket } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";

const FindTalent = () => {
  return (
    <div className="md:flex gap-4 justify-center md:space-y-0 space-y-4">
      <div>
        <img className="w-full h-full" src={image} alt="" />
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Card className="rounded-none">
            <CardBody>
              <TbTargetArrow className="text-7xl text-gray-900"></TbTargetArrow>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Targeted Recruitment
              </Typography>
              <Typography>
                Focuses on finding candidates with specialized skills and
                leadership experience.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="rounded-none">
            <CardBody>
              <AiFillRocket className="text-7xl text-gray-900"></AiFillRocket>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Long-Term Impact
              </Typography>
              <Typography>
                Aims to find leaders who align with the organization's vision
                and drive business success.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="rounded-none">
            <CardBody>
              <MdOutlineManageAccounts className="text-7xl text-gray-900"></MdOutlineManageAccounts>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Personalized Approach
              </Typography>
              <Typography>
                Involves direct engagement, networking, and in-depth assessments
                to match candidates with company goals.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="rounded-none">
            <CardBody>
              <FaIndustry className="text-7xl text-gray-900"></FaIndustry>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Industry Expertise
              </Typography>
              <Typography>
                Executive search firms have deep knowledge of specific
                industries, enabling them to identify the right talent.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindTalent;
