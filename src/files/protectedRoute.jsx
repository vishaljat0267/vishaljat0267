import react from "react";

export default function ProtectedRoute(props){

    const page = props.page;
    const token = localStorage.getItem('token');
    return token ? page : <div> unauthorized </div>

}