import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { useNavigate } from "react-router-dom";


const axiosPublic = axios.create({
    baseURL:"https://employee-management-server-tan.vercel.app",
})
const useAxios = () => {
    // // const navigate = useNavigate();
    // const {logOut} = useContext(AuthContext) || {}


    // // request interceptor
    // axiosPublic.interceptors.request.use(function (config){
    //     const token = localStorage.getItem('access token')
    //     console.log('request stoped by interceptor', token);
    //     config.headers.authorization = `Bearer ${token}`
    //     return config
    // }, function (error) {
    //     // Do something with request error
    //     return Promise.reject(error);
    //   });

    // //   response interceptior for 401 and 403 status
    // axiosPublic.interceptors.response.use(function (response) {
    //     return response;
    // }, async (error) => {
    //     const status = error.response?.status
    //     console.log('interceptor error', status);
    //     if(status === 401 || status === 403){
    //         await logOut();
    //         // navigate('/login')
    //     }
    //     return Promise.reject(error)
    // })


   return  axiosPublic;
};

export default useAxios;