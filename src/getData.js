
export const getData = async () => {

    await fetch(
    "https://sully-jimenezfullstackbankingapplication-ttsi.onrender.com/user-details",
        {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({token: window.localStorage.getItem("token"),
    }),
        })
        .then((res) => res.json())
        .then((data) => {
            window.localStorage.setItem("email", data.data.email)
            window.localStorage.setItem("balance", data.data.balance)
            window.localStorage.setItem("name", data.data.name)
        });
}