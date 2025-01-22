import { Card, Typography } from "@material-tailwind/react";
import useAllUser from "../../../../Hooks/useAllUser";
import AllEmployeeRow from "../AllEmployeeRow/AllEmployeeRow";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Name", "Designation", "Make Hr", "fire"];

const AllEmployeeList = () => {
  const axiosPublic = useAxios();
  const [allUser, refetch] = useAllUser();
  const employees = allUser.filter((user) => user.varified === true && user.role !== "HR");
  const hrs = allUser.filter((hr) => hr.role === "HR");
  const allEmployees = [...employees, ...hrs];
  console.log(allEmployees);

  // handle make Hr
  const handleMakeHr = async (id) => {
    await axiosPublic.patch(`/users/make-hr/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The employee has been promoted to HR.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  

  return (
    <Card className="h-full w-full overflow-scroll">
      <div className="p-3">
        <h2 className="mb-2 font-bold">All Employee List</h2>
        <p className="text-xs">
          See Information about all varified Employees and HR
        </p>
      </div>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
          {allEmployees.map((employee) => (
            <AllEmployeeRow
              employee={employee}
              handleMakeHr={handleMakeHr}
              key={employee._id}
            ></AllEmployeeRow>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default AllEmployeeList;
