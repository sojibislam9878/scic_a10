import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosCommon from "../hooks/useAxiosCommon";
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const axiosCommon = useAxiosCommon(); // Custom hook to get Axios instance
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  // Function to handle user registration
  const handleReg = (userInfo) => {
    const userPayload = { ...userInfo, status: "pending" };

    // Check if user with the same email exists
    axiosCommon.get(`/user/${userInfo.email}`)
      .then(res => {
        if (res.data) {
          if (res.data.status === "pending") {
            alert("Your request is pending");
          } else {
            alert("User already exists");
          }
        } else {
          // If user does not exist, proceed with registration
          axiosCommon.post("/users", userPayload)
            .then(res => {
              console.log("User registered successfully:", res.data);
              setUser(userInfo);

              // Save user data to localStorage
              localStorage.setItem('user', JSON.stringify(userInfo));
            })
            .catch(error => {
              console.error("Error registering user:", error);
              // Handle error during registration
            });
        }
      })
      .catch(error => {
        console.error("Error checking user existence:", error);
        // Handle error checking user existence
      });
  };

   // Function to handle user logout
   const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    setUser(null); // Clear user state
  };

  // Function to load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


    // Function to handle user login
    const handleLogin = (loginInfo) => {
        console.log(loginInfo);
        if (!isNaN(loginInfo.email)) {
          return  axiosCommon.get(`/usern/${loginInfo.email}`)
          .then(res => {
            if (res.data && res.data.password === loginInfo.password) {
              setUser(res.data);
              setLoginError(null);
              localStorage.setItem('user', JSON.stringify(res.data));
              
            }
          })
        }
        axiosCommon.get(`/user/${loginInfo.email}`)
          .then(res => {
            if (res.data && res.data.password === loginInfo.password) {
              setUser(res.data);
              setLoginError(null);
              localStorage.setItem('user', JSON.stringify(res.data));
            } else {
                setLoginError("Invalid email or password");
                return alert("wrong email or pass")
            }
          })
          .catch(error => {
            console.error("Error logging in:", error);
            setLoginError("Error logging in. Please try again later.");
          });
      };

console.log(user);

    const values ={
        user,
        handleReg,
        handleLogout,
        handleLogin,

    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProviders.propTypes = {
    children: PropTypes.element.isRequired,
  };
export default AuthProviders;