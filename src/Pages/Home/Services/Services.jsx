import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaRegNewspaper, FaRegRectangleList, FaRegWindowMaximize } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2">
      <Card className="mt-6">
        <CardBody>
            <FaRegNewspaper className="text-7xl p-1 text-light-blue-700"></FaRegNewspaper>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Performance Monitoring
          </Typography>
          <Typography>
            Measure and enhance employee productivity with performance reviews,
            goal tracking, and analytics to identify growth opportunities.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6">
        <CardBody>
            <FaRegWindowMaximize className="text-7xl p-1 text-light-blue-700"></FaRegWindowMaximize>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Payroll Integration
          </Typography>
          <Typography>
            Automate payroll calculations and ensure accurate salary
            disbursements with built-in tax compliance and reporting.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6">
        <CardBody>
            <FaRegRectangleList className="text-7xl p-1 text-light-blue-700"></FaRegRectangleList>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Reporting and Analytics
          </Typography>
          <Typography>
            Gain actionable insights into your workforce with detailed reports
            and analytics to support data-driven decision-making.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Services;
