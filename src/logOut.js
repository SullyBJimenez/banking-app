
export const logOut = () => {
    window.localStorage.setItem("loggedIn", false)
    window.localStorage.clear();
    window.location.href = "https://sully-jimenezfullstackbankingapplication.onrender.com/home/"
}