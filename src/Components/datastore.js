import { useState } from "react";


export const user = (profile) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [balance, setBalance] = useState(0);

    setName(profile.name);
    setEmail(profile.email);
    setPassword(profile.password);
    setBalance(profile.balance);

    return {name, email, password, balance}

}
