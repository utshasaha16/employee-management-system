import { IconButton } from "@material-tailwind/react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxios();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // const currentUser = result.user;
        console.log(result);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          role: "Employee",
        };
        axiosPublic
          .post('/users', userInfo)
          .then((response) => {
            console.log(response.data);
            Swal.fire({
              title: "Successfully logged In",
              showClass: {
                popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `,
              },
              hideClass: {
                popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `,
              },
            });
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex items-center justify-center mt-3">
      <button onClick={handleGoogleSignIn}>
        <IconButton size="lg">
          <FaGoogle />
        </IconButton>
      </button>
    </div>
  );
};

export default SocialLogin;
