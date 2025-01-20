import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllUser = () => {
   const axiosPublic = useAxios();
   const {data: allUser = [], refetch, isLoading} = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
        const res = await axiosPublic.get("/users");
        return res.data;
    }
   })
   return [allUser, refetch, isLoading]
};

export default useAllUser;