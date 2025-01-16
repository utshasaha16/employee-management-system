import axios from "axios";


export const axiosPublic = axios.create({
    baseURL:"http://localhost:5000/",
})
const useAxios = () => {
   return  axiosPublic;
};

export default useAxios;