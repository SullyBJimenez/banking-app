import { useNavigate } from "react-router-dom"

export function LogOut() {
    const navigate = useNavigate();

    const logout = () => {
        window.localStorage.setItem("loggedIn", false)
        window.localStorage.clear();
        navigate("/home/")
    }

    logout()
   
}