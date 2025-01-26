import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure();
    
    const {data: employeeDetails = []} = useQuery({
        queryKey: ['employee', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee-pay-request/${id}`)
            return res.data
        }
    })
    console.log(employeeDetails.employeeImage);

    return (
        <div>
            hello from chart component
        </div>
    );
};

export default EmployeeDetails;