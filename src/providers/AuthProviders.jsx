import { createContext } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const user ="sojib"
    const values ={
        user,

    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProviders.propTypes = {
    children: PropTypes.element.isRequired,
  };
export default AuthProviders;