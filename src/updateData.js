export const updateData = async () => {
  await fetch("http://localhost:2020/update-balance", {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
      balance: window.localStorage.getItem("balance"),
    }),
  }).then((res) => res.json())
  .then((data) => {
    console.log(data, "data")
  })
};
