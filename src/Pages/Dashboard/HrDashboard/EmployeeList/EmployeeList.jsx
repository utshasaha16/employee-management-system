import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import useAllUser from "../../../../Hooks/useAllUser";
import Loading from "../../../../component/Loading/Loading";
import EmployeeTableRow from "../EmployeeTableRow/EmployeeTableRow";

const EmployeeList = () => {
  const [allUser, , isLoading] = useAllUser();
  console.log(allUser);

  // filter by role
  const employees = allUser.filter((user) => user.role === "Employee");
  console.log(employees);

  const TABLE_HEAD = [
    "Name",
    "Email",
    "Varified",
    "Bank Account",
    "Salary",
    "",
    "",
  ];

  {
    isLoading && <Loading></Loading>;
  }

  return (
    <Card className="h-full w-full p-3">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Employee list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all employees
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return <EmployeeTableRow employee={employee} key={employee._id}></EmployeeTableRow>;
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default EmployeeList;
