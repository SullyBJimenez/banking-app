import React, { useEffect } from "react";
import { useData } from "../useData.js";
import { Card } from "./context.js";

export function Deposit() {
  const {
    balance,
    setBalance,
    deposit,
    setDeposit,
    show,
    isDepositDisabled,
    handleSubmit,
    clearForm,
  } = useData(true);
  useEffect(() => {
    setBalance(localStorage.getItem("balance"));
  },);

  return (
    <Card
      bgcolor="primary"
      header={`Account Balance : ${balance}`}
      body={
        show ? (
          <>
            Deposit Amount:
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={isDepositDisabled}
              onClick={handleSubmit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Successful Deposit</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another deposit
            </button>
          </>
        )
      }
    />
  );
}
