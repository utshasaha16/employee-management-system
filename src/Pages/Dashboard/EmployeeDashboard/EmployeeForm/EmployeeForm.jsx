import { FaPenToSquare } from "react-icons/fa6";
import {
  Input,
  Option,
  Select,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TiDelete } from "react-icons/ti";
import useFormData from "../../../../Hooks/useFormData";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Provider/AuthProvider";

const EmployeeForm = ({ sheet, index }) => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, setValue, reset } = useForm();
  const [, refetch] = useFormData();
  const axiosPublic = useAxios();
  const [open, setOpen] = useState(false);
  const { task, hour, date, _id } = sheet;

  const handleDate = (date) => {
    console.log(date);
    setStartDate(date);
    setValue("date", date);
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  // handle delete
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

  // handle update data
  const onSubmit = (data) => {
    console.log(data);
    if (user) {
      axiosPublic.put(`/employee-work-sheet/${_id}`, data).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work sheet has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          reset()
          setOpen(false);
        }
      });
    }
  };

  return (
    <>
      <tr key={index} className="even:bg-blue-gray-50/50">
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {index + 1}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {task}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {hour}
          </Typography>
        </td>
        <td className="p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {date}
          </Typography>
        </td>
        <td className="p-4">
          <button onClick={handleOpen}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal text-green-500"
            >
              <FaPenToSquare></FaPenToSquare>
            </Typography>
          </button>
        </td>
        <td className="p-4">
          <button onClick={() => handleDelete(_id)} className="">
            <Typography color="blue-gray" className="font-normal text-red-500">
              <TiDelete className="text-xl"></TiDelete>
            </Typography>
          </button>
        </td>
      </tr>

      {/* dialog */}
      <Dialog open={open} handler={handleOpen}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>Update the date</DialogHeader>
            <DialogBody>
              {/* select task */}
              <div className="w-full mb-3">
                <Select
                  label="Select Task"
                  {...register("task", { required: true })}
                  onChange={(value) => setValue("task", value)}
                >
                  <Option value="Sales">Sales</Option>
                  <Option value="Support">Support</Option>
                  <Option value="Paper-work">Paper work</Option>
                  <Option value="Content">Content</Option>
                </Select>
              </div>
              {/* hour */}
              <Input
                {...register("hour")}
                name="hour"
                type="number"
                // value={work.hour}
                variant="outlined"
                label="Hour"
                placeholder="Hour"
              />
              {/* date picker */}
              <div className="mt-3">
                <DatePicker
                  // name="date"
                  className="border-2 border-gray-400 rounded-md p-1"
                  selected={startDate}
                  onChange={handleDate}
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                Close
              </Button>
              <Button type="submit" variant="gradient" color="green">
                Update
              </Button>
            </DialogFooter>
          </form>
        </Dialog>
    </>
  );
};

export default EmployeeForm;
