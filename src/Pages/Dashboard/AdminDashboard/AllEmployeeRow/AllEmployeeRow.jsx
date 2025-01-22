import { Typography } from "@material-tailwind/react";
import useAxios from "../../../../Hooks/useAxios";
import { useState } from "react";
import Swal from "sweetalert2";

const AllEmployeeRow = ({ employee, refetch, handleMakeHr }) => {
  const axiosPublic = useAxios();
  const { name, role, _id, status } = employee;
  const [isFired, setIsFired] = useState(status === "fired");
  // const [roles, setRoles] = useState(role);

  // handle fire
  const handleFired = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosPublic.patch(`/users/fire/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            setIsFired(true);
            Swal.fire({
              title: "Fired!",
              text: "Your employee has been fired.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <tr className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {name}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {role}
          </Typography>
        </td>
        <td className="p-4">
          {role === "HR" ? (
            <>
              <Typography className="text-green-500">Already HR</Typography>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleMakeHr(_id);
                }}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  Make HR
                </Typography>
              </button>
            </>
          )}
        </td>
        <td className="p-4">
          {isFired ? (
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium text-red-500"
              >
                Fired
              </Typography>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  handleFired(_id);
                }}
              >
                <Typography
                  as="a"
                  variant="small"
                  className="font-medium, text-red-500"
                >
                  fire
                </Typography>
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllEmployeeRow;
