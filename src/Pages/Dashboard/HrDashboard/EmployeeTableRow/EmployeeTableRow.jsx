import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import {  useForm } from "react-hook-form";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { Form, Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EmployeeTableRow = ({ employee, handleVarified }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { name, email, varified, accountNO, salary, _id, designation } =
    employee;
  const [open, setOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handlePay = (data) => {
    const employeeData = {
      employeName: name,
      employeeSalary: salary,
      email: email,
      designation: designation,
      month: data.month,
      year: data.year,
      status: "Pending",
    };
    console.log(employeeData);

    axiosSecure.post("/employee-pay-request", employeeData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment request has been send by Admin",
          showConfirmButton: false,
          timer: 1500,
        })
        reset()
        handleOpen()
        
      }
    });
  };

  return (
    <>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {name}
              </Typography>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {email}
            </Typography>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <button
            onClick={() => {
              handleVarified(_id, varified);
            }}
          >
            {!varified ? (
              <>
                <BsFillXCircleFill className="text-red-500"></BsFillXCircleFill>
              </>
            ) : (
              <>
                <BsCheckCircleFill className="text-green-500"></BsCheckCircleFill>
              </>
            )}
          </button>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {accountNO}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50">{salary} $</td>
        <td className="p-4 border-b border-blue-gray-50">
          {varified ? (
            <button
              onClick={handleOpen}
              className="px-2 rounded-sm py-1 bg-green-500 hover:bg-green-600 text-white"
            >
              pay
            </button>
          ) : (
            <button
              disabled
              className="px-2 rounded-sm py-1 bg-gray-400 text-gray-200"
            >
              pay
            </button>
          )}
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <Link to={`/dashboard/employeeDetails/${email}`}>
            <button className="px-2 py-1 rounded-sm bg-blue-gray-700 text-white">
              Details
            </button>
          </Link>
        </td>
      </tr>

      {/* dialog */}
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
        <Form onSubmit={handleSubmit(handlePay)}>
          <DialogHeader className="relative m-0 block">
            <Typography variant="h4" color="blue-gray">
              Send Payment Request
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600">
              Complete the form below with your Payment Request.
            </Typography>
          </DialogHeader>
          <DialogBody className="space-y-4 pb-6">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Salary
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="salary"
                value={salary}
                readOnly
                name="salary"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Month
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="MMMM"
                  type="number"
                  {...register("month", {
                    required: "month is required",
                    min: { value: 1, message: "Month cannot be less than 1" },
                    max: { value: 12, message: "Month cannot exceed 12" },
                  })}
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
                {errors.month && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.month.message}
                  </Typography>
                )}
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Year
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="YYYY"
                  type="number"
                  {...register("year", {
                    required: "year is required",
                    min: { value: 2020, message: "Year cannot be before 2020" },
                    max: { value: 2100, message: "Year cannot exceed 2100" },
                  })}
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
                {errors.year && (
                  <Typography variant="small" color="red" className="mt-1">
                    {errors.year.message}
                  </Typography>
                )}
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              type="submit"
              className="ml-auto bg-green-500 hover:bg-green-600 text-white"
            >
              pay
            </Button>
          </DialogFooter>
        </Form>
      </Dialog>
    </>
  );
};

export default EmployeeTableRow;
