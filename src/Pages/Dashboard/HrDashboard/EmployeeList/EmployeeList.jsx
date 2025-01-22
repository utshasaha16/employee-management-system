import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import useAllUser from "../../../../Hooks/useAllUser";
import EmployeeTableRow from "../EmployeeTableRow/EmployeeTableRow";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const axiosPublic = useAxios();
  const [allUser, refetch] = useAllUser();

  const TABLE_HEAD = [
    "Name",
    "Email",
    "Varified",
    "Bank Account",
    "Salary",
    "Action",
    "Details",
  ];
  // filter by role
  const employees = allUser.filter((user) => user.role === "Employee");
  console.log(employees.map(e => e._id));

  // handle varified
  const handleVarified = async (id, varified) => {
    console.log(id);
    const newStatus = !varified;

    await axiosPublic
      .patch(`/users/${id}`, { varified: newStatus })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

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
              return (
                <EmployeeTableRow
                  employee={employee}
                  handleVarified={handleVarified}
                  key={employee._id}
                ></EmployeeTableRow>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default EmployeeList;
