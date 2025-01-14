import {
  Card,
  input,
  Button,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
    })
    .catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter details to create account.
        </Typography>
        <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-6">
            {/* bank account number */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Bank account no
            </Typography>
            <Input
              size="lg"
              placeholder="Bank account no"
              {...register("accountNo", { required: true })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* salary */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              salary
            </Typography>
            <Input
              size="lg"
              type="number"
              placeholder="Salary"
              {...register("salary", { required: true })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* designation */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Designation
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="Designation"
              {...register("designation", { required: true })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* name */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* role */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Select Role
            </Typography>

            <div className="w-full">
              <Select
                label="Select role"
                onChange={(value) => setValue("role", value)}
              >
                <Option value="HR">HR</Option>
                <Option value="Employee">Employee</Option>
              </Select>
            </div>
            {/* email */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {/* password */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                // pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])$/,
              })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">
                password is required
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                password must be 6 characters
              </p>
            )}
            {/* {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                password must have one uppercase and one special characters
              </p>
            )} */}
            {/* profile picture */}
            <input
              type="file"
              name="profilePIcture"
              {...register("profilePicture", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
