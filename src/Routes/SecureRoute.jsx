import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropType from "prop-types";

const SecureRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  // console.log(user);
  // console.log(loading);
  if (loading) {
    return (
      <div className="w-full h-[60vh] flex justify-center items-center text-4xl">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};
SecureRoute.propTypes = {
  children: PropType.node,
};
export default SecureRoute;
