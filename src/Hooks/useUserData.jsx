import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserData = () => {
  const axiosPublic = useAxios();
  const { user } = useContext(AuthContext);
  const { data: userData = [], isLoading } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userData];
};

export default useUserData;
