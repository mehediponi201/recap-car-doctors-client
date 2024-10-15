import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import swal from 'sweetalert'

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading)
    {
        return <progress className="progress w-56"></progress>
    } 
    if(user?.email)
    {
        return children;
    }
    return <Navigate state={location.pathname} to="/login">
        {
            swal("Please,login to access your booking collection!!!")
        }
    </Navigate>
};

export default PrivateRoute;