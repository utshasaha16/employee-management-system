import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const useFormData = () => {
//    tan stack query
const axiosPublic = useAxios();
const {user} = useContext(AuthContext);
console.log(user);
const {data: work=[], refetch} = useQuery({
queryKey: ['work', user?.email],
queryFn: async () => {
    if(!user?.email){
        return []
    }
    const res = await axiosPublic.get(`/employee-work-sheet?email=${user.email}`)
    return res.data;
}
})
return [work, refetch]

};

export default useFormData;