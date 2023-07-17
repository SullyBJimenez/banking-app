import {useState, useEffect} from 'react';
import { updateData } from './updateData.js';

export const useData = (isDeposit) => {
    const [balance, setBalance] = useState()
    const [name, setName] = useState("")
    const [deposit, setDeposit] = useState("");
    const [withdraw, setWithdraw] = useState("");
    const [show, setShow] = useState(true);
    const [isDepositDisabled, setIsDepositDisabled] = useState(Boolean);
    const [isWithdrawDisabled, setIsWithdrawDisabled] = useState(Boolean);
  
    useEffect(() => {
      if (deposit.length === 0) {
        setIsDepositDisabled(true);
      } else {
        setIsDepositDisabled(false);
      }
    }, [deposit]);
  
    useEffect(() => {
      if (withdraw.length === 0) {
        setIsWithdrawDisabled(true);
      } else {
        setIsWithdrawDisabled(false);
      }
    }, [withdraw]);
  
    const handleSubmit = async (event) => {
      if (isDeposit) {
        if (isNaN(deposit)) {
          return window.alert("Please enter a valid number");
        }
        if (deposit < 0) {
          return window.alert("Please enter a positive number");
        }
        const depositTotal = +balance + +deposit;
        console.log("balance total", balance)
        console.log("deposit total", depositTotal)
        setBalance(depositTotal);
  
        localStorage.setItem("balance", JSON.stringify(depositTotal));
      } else {
        if (isNaN(withdraw)) {
          return window.alert("Please enter a valid number");
        }
        if (withdraw < 0) {
          return window.alert("Please enter a positive number");
        }
        if (balance - withdraw < 0) {
          return window.alert("Insufficient funds");
        }
        const withdrawTotal = +balance - +withdraw;
        setBalance(withdrawTotal);
        localStorage.setItem("balance", withdrawTotal);
      }
      // added +in front of value to turn to integer
      setShow(false);
      await updateData();
      event.preventDefault();
    };

    function clearForm() {
      setDeposit("");
      setWithdraw("");
      setShow(true);
    }
  
    return {
      name,
      setName,
      balance,
      handleSubmit,
      deposit,
      setDeposit,
      setWithdraw,
      setBalance,
      show,
      clearForm,
      isDepositDisabled,
      isWithdrawDisabled,
    };
}