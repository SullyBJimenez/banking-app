import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const LogoutButtonStyle = styled.button`
  display: contents;
`

export function LogOut({setIsLoggedIn}) {
  const navigate = useNavigate();

  const navigateAndLogout = () => {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.clear();
    setIsLoggedIn(false)
    navigate("/home/");
  };

  return (
    <LogoutButtonStyle type="submit" onClick={navigateAndLogout}>
      {' '}Logout?
    </LogoutButtonStyle>
  );
}
