import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
