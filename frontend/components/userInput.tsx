'use client'

import { useState } from "react";
import UserOutput from "@components/userOutput";
import type { Address } from "@sharedtypes/address";


function UserInput() {
    const [cep, setCep] = useState("");
    const [userAddress, setAddress] = useState<Address>({
        street: "",
        neighborhood: "",
        city: "",
        state: ""
    });
    const [showAddress, setShowAddress] = useState(false);

    async function handleClick(): Promise<any> {

        const payload = {
            cep: cep
        }

        const response = await fetch("http://localhost:8000/api/cep", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const body = await response.json();

        setCep("");
        setAddress({
            street: body.street,
            neighborhood: body.neighborhood,
            city: body.city,
            state: body.state
        });
        setShowAddress(true);
    }

    return (
        <div>
            <h1>Digite um CEP</h1>
            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>
            <button onClick={handleClick}>Enviar</button>
            {showAddress && <UserOutput {...userAddress}/>}
        </div>
    )
}

export default UserInput;