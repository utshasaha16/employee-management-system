import { NavLink, Outlet } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);
  const axiosPublic = useAxios();
  console.log(userRole);

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/users/${user.email}`)
      .then((res) => {
        setUserRole(res.data.role);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
        
    }
  }, [user?.email, axiosPublic]);

  // TODO : Check if user is admin
  const isAdmin = userRole === "Admin";
  const isHR = userRole === "HR";
  const isEmployee = userRole === "Employee";

  return (
    <div className="md:flex">
      <div className="w-68 min-h-full bg-gray-200">
        <ul className="p-4">
          <li className="flex items-center gap-1 p-2">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>
          <div className="divider"></div>
          {isEmployee && (
            <>
              <li className="flex items-center gap-1 p-2">
                <BiSpreadsheet></BiSpreadsheet>
                <NavLink to="/dashboard/work-sheet">Work Sheet</NavLink>
              </li>
              <li className="flex items-center gap-1 p-2">
                <MdPayment className="text-lg"></MdPayment>
                <NavLink to="/dashboard/payment-history">
                  Payment History
                </NavLink>
              </li>
            </>
          )}
          {isHR && (
            <>
              <li className="flex items-center gap-1 p-2">
                <BiSpreadsheet></BiSpreadsheet>
                <NavLink to="/dashboard/work-sheet">emplyee list</NavLink>
              </li>
              <li className="flex items-center gap-1 p-2">
                <MdPayment className="text-lg"></MdPayment>
                <NavLink to="/dashboard/payment-history">Progress</NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li className="flex items-center gap-1 p-2">
                <BiSpreadsheet></BiSpreadsheet>
                <NavLink to="/dashboard/employeeList">All emplyee list</NavLink>
              </li>
              <li className="flex items-center gap-1 p-2">
                <MdPayment className="text-lg"></MdPayment>
                <NavLink to="/dashboard/payroll">payroll</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
