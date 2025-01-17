import {
  Card,
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
import Swal from "sweetalert2";
import axios from "axios";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import useAxios from "../../Hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxios()

  // handle form submission
  const onSubmit = async (data) => {
    console.log(data);

    // get image file and upload to imagebb
    const imageFile = { image: data.image[0] };
    const res = await axios.post(
      `${image_hosting_api}`,
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    const image_url = res.data.data.display_url;
    console.log(image_url);

    // Registar mew user
    try {
      await createUser(data.email, data.password);

      await updateUserProfile(data.name, image_url).then(() => {
        reset();
        Swal.fire({
          title: "Successfully registered",
          showClass: {
            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `,
          },
          hideClass: {
            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `,
          },
        });
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    // send data to the data base
    if (res.data.success) {
      const employee = {
        name: data.name,
        email: data.email,
        role: data.role,
        designation: data.designation,
        salary: parseFloat(data.salary),
        accountNO: parseFloat(data.accountNo),
        image: res.data.data.display_url,
      };
      console.log(employee);

      // post user data to the database
      axiosPublic.post("/users", employee);
    }
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
              type="number"
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
                {...register("role", { required: true })}
                onChange={(value) => setValue("role", value)}
              >
                <Option value="HR">HR</Option>
                <Option value="Employee">Employee</Option>
              </Select>
              {errors.role?.type === "required" && (
                <p className="text-red-600">role is required</p>
              )}
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
              <p className="text-red-600">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">password must be 6 characters</p>
            )}
            {/* {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                password must have one uppercase and one special characters
              </p>
            )} */}

            {/* image */}
            <input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Link to="/login" className="font-medium text-gray-900">
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            Sign In
          </Typography>
            </Link>
        </form>
        <SocialLogin></SocialLogin>
      </Card>
    </div>
  );
};

export default Register;
