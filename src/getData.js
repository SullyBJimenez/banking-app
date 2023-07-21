
export const getData = async () => {

    await fetch(
    "https://main.d255e4loymenhv.amplifyapp.com/user-details",
        {
        method: "POST",
        mode: "cors",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({token: window.localStorage.getItem("token"),
    }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("userdata", data.data.name);
            window.localStorage.setItem("email", data.data.email)
            window.localStorage.setItem("balance", data.data.balance)
            window.localStorage.setItem("name", data.data.name)
        });
}