import { NavLink, Outlet } from "react-router-dom";
import { BiSpreadsheet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  // TODO : Check if user is admin
  const isAdmin = true;
  const isHR = true;
  const isEmployee = true;

  return (
    <div className="md:flex">
      <div className="w-68 min-h-full bg-gray-200">
        <ul className="p-4">
          <li className="flex items-center gap-1 p-2">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex items-center gap-1 p-2">
            <BiSpreadsheet></BiSpreadsheet>
            <NavLink to="/dashboard/work-sheet">Work Sheet</NavLink>
          </li>
          <li className="flex items-center gap-1 p-2">
            <MdPayment className="text-lg"></MdPayment>
            <NavLink to="/dashboard/payment-history">Payment History</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
