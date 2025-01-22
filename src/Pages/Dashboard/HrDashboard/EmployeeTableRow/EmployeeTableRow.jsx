import { Typography } from "@material-tailwind/react";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

const EmployeeTableRow = ({ employee, handleVarified }) => {
    const { name, email, varified, accountNO, salary, _id } = employee;
    
  return (
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
        <button onClick={() => {handleVarified(_id, varified)}}>
            {
                !varified ? <>
                 <BsFillXCircleFill className="text-red-500"></BsFillXCircleFill>
                
                </> : <>
                <BsCheckCircleFill className="text-green-500"></BsCheckCircleFill>
                </>
            }
        </button>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {accountNO}
        </Typography>
      </td>
      <td className="p-4 border-b border-blue-gray-50">{salary}</td>
      <td className="p-4 border-b border-blue-gray-50">
        <button className="px-2 rounded-sm py-1 bg-blue-gray-700 text-white">
          pay
        </button>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <button className="px-2 py-1 rounded-sm bg-blue-gray-700 text-white">
          Details
        </button>
      </td>
    </tr>
  );
};

export default EmployeeTableRow;
