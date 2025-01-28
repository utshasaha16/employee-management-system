import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useEmployeePayRequest from "../../Hooks/useEmployeePayRequest";

const ChackoutForm = () => {
    const [employeePayRequest] = useEmployeePayRequest();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [selectEmployee, setSelectEmployee] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  // console.log(employeePayRequest);
  // console.log(employeSalary);

  // useEffect(() => {
  //   const employee = employeePayRequest.find(emp => emp.employeId === employeId)
  //   setSelectEmployee(employee)
  // }, [setSelectEmployee, employeId])



  useEffect(() => {
    axiosSecure.post("/create-payment-intent", )
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment", paymentMethod);
      setError("");
    }
  };

  return (
    <div>
      <form className="p-5" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>
        <Button
          className="bg-[#3D3BF3] mt-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default ChackoutForm;
