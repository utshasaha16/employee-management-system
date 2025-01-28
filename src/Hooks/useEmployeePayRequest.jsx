import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEmployeePayRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employeePayRequest = [] } = useQuery({
    queryKey: ["payData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/employee-pay-request");
      return res.data;
    },
  })

  return [employeePayRequest]
};

export default useEmployeePayRequest;
