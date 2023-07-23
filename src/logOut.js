import { useNavigate } from "react-router-dom";

export const LogOut = () => {
    const navigate = useNavigate();

    window.localStorage.setItem("loggedIn", false)
    window.localStorage.clear();
    navigate("/home/")
}