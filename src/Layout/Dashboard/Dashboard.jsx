import { NavLink, Outlet } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import useUserData from "../../Hooks/useUserData";

const Dashboard = () => {
  const [userData] = useUserData();
  console.log(userData.role);
  const isAdmin = userData.role === "Admin";
  const isHR = userData.role === "HR";
  const isEmployee = userData.role === "Employee";
  
  return (
    <div className="md:flex">
      <div className="w-68 min-h-full bg-gray-200">
        <ul className="p-4">
          <li className="flex items-center gap-1 p-2">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>
          <div className="divider"></div>
          {isAdmin && (
            <>
              <li className="flex items-center gap-1 p-2">
                <BiSpreadsheet></BiSpreadsheet>
                <NavLink to="/dashboard/allEmployeeList">All emplyee List</NavLink>
              </li>
              <li className="flex items-center gap-1 p-2">
                <MdPayment className="text-lg"></MdPayment>
                <NavLink to="/dashboard/payroll">Payroll</NavLink>
              </li>
            </>
          )}
          {isHR && (
            <>
              <li className="flex items-center gap-1 p-2">
                <BiSpreadsheet></BiSpreadsheet>
                <NavLink to="/dashboard/employeeList">Emplyee List</NavLink>
              </li>
              <li className="flex items-center gap-1 p-2">
                <MdPayment className="text-lg"></MdPayment>
                <NavLink to="/dashboard/progress">Progress</NavLink>
              </li>
            </>
          )}
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
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
