import { useNavigate } from "react-router-dom"

export const LogOut = () => {
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.setItem("loggedIn", false)
        window.localStorage.clear();
        navigate("/home/")
    }

    logout()
   
}