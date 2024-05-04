import { useContext } from "react";
import AuthContext from "../Providers/AuthProvider"

const PrivetRoute = () => {
    const {isLoading} = useContext(AuthContext)
    if(isLoading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivetRoute;