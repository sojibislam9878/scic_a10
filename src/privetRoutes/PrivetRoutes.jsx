import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// import Spinner from "../Components/Spinner";
const PrivetRoute = ({ children }) => {
  const { user, loading} = useAuth();
  const location = useLocation();

  if (loading) {
    // return <Spinner></Spinner>;
    return <div>loading</div>
  }
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};
PrivetRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PrivetRoute;
