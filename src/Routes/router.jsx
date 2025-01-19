import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Secret from "../Pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import PayRoll from "../Pages/Dashboard/PayRoll/PayRoll";
import WorkSheet from "../Pages/Dashboard/EmployeeDashboard/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/EmployeeDashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

        // admin routes
      {
        path: "employeeList",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "payroll",
        element: <PayRoll></PayRoll>,
      },

      // HR routes




      // employee routes
      {
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <WorkSheet></WorkSheet>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },

      
    ],
  },
]);
