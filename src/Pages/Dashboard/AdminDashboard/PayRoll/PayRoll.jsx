import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Button, Card, Input, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Salary", "Month", "Year", "Payment Date", ""];

const PayRoll = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employeePayRequest = [] } = useQuery({
    queryKey: ["payData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employee-pay-request");
      return res.data;
    },
  });
  return (
    <>
      <h2>pay Roll {employeePayRequest.length}</h2>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeePayRequest.map(
              ({ employeName, month, year, employeeSalary, _id }, index) => {
                const isLast = index === employeePayRequest.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {employeName}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {employeeSalary} $
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {month}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {year}
                      </Typography>
                    </td>
                    <td className={classes}>
                    <Input type="number" label="Payment Date" />
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white"
                        variant="text"
                      >
                        Pay
                      </Button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default PayRoll;
