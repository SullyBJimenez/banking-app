import { render } from "./helpers";

export const updateData = async () => {
  const url = render

  await fetch(url+"update-balance", {
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
