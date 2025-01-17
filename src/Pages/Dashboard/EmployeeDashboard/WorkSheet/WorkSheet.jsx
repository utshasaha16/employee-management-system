import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useForm, } from "react-hook-form";
import useAxios from "../../../../Hooks/useAxios";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useFormData from "../../../../Hooks/useFormData";

const WorkSheet = () => {
  const axiosPublic = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, setValue, reset } = useForm();
  const {user} = useContext(AuthContext);
  const [, refetch] = useFormData();

  const handleDate = (date) => {
    console.log(date);
    setStartDate(date)
    setValue("date", date)
  }

  const onSubmit = (data) => {
    console.log(data);
    const workSheet = {
      task: data.task,
      hour: parseFloat(data.hour),
      date: data.date,
      email: user?.email
    }

    // save data to the data base
    axiosPublic.post("/employee-work-sheet", workSheet)
    .then(result => {
      console.log(result.data);
      if(result.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        refetch()

      }
    })

  };
  return (
    <div className="p-4">
      <h2 className="mb-3 text-lg">Work Sheet</h2>
      {/* work sheet form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-2 md:space-y-0 space-y-3">
          {/* select task */}
          <div className="w-full">
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
            // name="hour"
            type="number"
            variant="outlined"
            label="Hour"
            placeholder="Hour"
          />
          {/* date picker */}
          <div>
            <DatePicker
              // name="date"
              className="border-2 border-gray-400 rounded-md p-1  "
              selected={startDate}
              onChange={handleDate}
            />
          </div>
          {/* add button */}

          <button
            type="submit"
            className="px-3 py-1 rounded-md bg-blue-gray-800"
          >
            Add
          </button>
        </div>
      </form>
      {/*  */}
      <EmployeeForm></EmployeeForm>
    </div>
  );
};

export default WorkSheet;
