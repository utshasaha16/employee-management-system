import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import useUserData from "../../Hooks/useUserData";
import Loading from "../../component/Loading/Loading";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const location = useLocation();
  const [userData, isLoading] = useUserData();
  console.log(userData);
  console.log(userData.role);
  
  const isAdmin = userData.role === "Admin";
  const isHR = userData.role === "HR";
  const isEmployee = userData.role === "Employee";

  const defaultRoute = isAdmin
    ? "/dashboard/allEmployeeList"
    : isHR
    ? "/dashboard/employeeList"
    : isEmployee
    ? "/dashboard/work-sheet"
    : "/";

  if (location.pathname === "/dashboard") {
    return (
      <Navigate to={defaultRoute} state={{ from: location }} replace></Navigate>
    );
  }

  if (!isLoading) {
    <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>Employee | Dashboard</title>
      </Helmet>
      <div className="md:flex">
        <div className="w-68 min-h-full bg-gray-200">
          <ul className="p-2">
            <li className="flex items-center gap-1 p-2">
              <FaHome></FaHome>
              <NavLink to="/">Home</NavLink>
            </li>
            <div className="divider"></div>
            {isAdmin && (
              <>
                <li className="flex items-center gap-1 mb-3">
                  <BiSpreadsheet className="text-lg"></BiSpreadsheet>
                  <NavLink to="/dashboard/allEmployeeList">
                    All emplyee List
                  </NavLink>
                </li>
                <li className="flex items-center gap-1">
                  <MdPayment className="text-lg"></MdPayment>
                  <NavLink to="/dashboard/payroll">Payroll</NavLink>
                </li>
              </>
            )}
            {isHR && (
              <>
                <li className="flex items-center gap-1 mb-3">
                  <BiSpreadsheet className="text-lg"></BiSpreadsheet>
                  <NavLink to="/dashboard/employeeList">Emplyee List</NavLink>
                </li>
                <li className="flex items-center gap-1">
                  <MdPayment className="text-lg"></MdPayment>
                  <NavLink to="/dashboard/progress">Progress</NavLink>
                </li>
              </>
            )}
            {isEmployee && (
              <>
                <li className="flex items-center gap-1 mb-3">
                  <BiSpreadsheet className="text-lg"></BiSpreadsheet>
                  <NavLink to="/dashboard/work-sheet">Work Sheet</NavLink>
                </li>
                <li className="flex items-center gap-1">
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
    </>
  );
};

export default Dashboard;
