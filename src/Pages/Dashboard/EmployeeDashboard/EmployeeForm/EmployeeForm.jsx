import { FaPenToSquare } from "react-icons/fa6";
import { Card, Typography } from "@material-tailwind/react";
import { TiDelete } from "react-icons/ti";
import useFormData from "../../../../Hooks/useFormData";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";

const EmployeeForm = () => {
  const [work, refetch] = useFormData();
  const axiosPublic = useAxios();
  const TABLE_HEAD = ["Task no", "Task", "Hour", "Date", "Update", "Delete"];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/employee-work-sheet/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-3">
      <h2 className="text-lg">Work Data</h2>
      <div className="mt-2">
        <Card className="h-full w-full overflow-scroll">
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
              {work.map((sheet, index) => (
                <tr key={sheet._id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sheet.task}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sheet.hour}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {sheet.date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <button onClick={handleOpen}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <FaPenToSquare></FaPenToSquare>
                      </Typography>
                    </button>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(sheet._id)}
                      className=""
                    >
                      <Typography color="blue-gray" className="font-normal">
                        <TiDelete className="text-xl"></TiDelete>
                      </Typography>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
      {/* dialog */}
      <div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Update the date</DialogHeader>
          <DialogBody></DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Close</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Update</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default EmployeeForm;
