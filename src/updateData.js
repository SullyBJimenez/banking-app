export const updateData = async () => {
  await fetch("https://sully-jimenezfullstackbankingapplication-ttsi.onrender.com/update-balance", {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
      balance: window.localStorage.getItem("balance"),
    }),
  }).then((res) => res.json())
  .then((data) => {
    
  })
};
