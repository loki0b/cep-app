'use client'

import { useState } from "react";
import UserOutput from "@components/userOutput";
import type { Address } from "types";


function InputCard() {
    const [showAddress, setShowAddress] = useState(false);
    const [userAddress, setUserAddress] = useState<Address>({
        cep: "",
        street: "",
        neighborhood: "",
        city: "",
        state: ""
    });

    const inputProps = {
        userAddress,
        setUserAddress,
        setShowAddress
    }

    const outputProps = {
        userAddress
    }

    return (
        <div className="border">
            <Input {...inputProps} />
            {showAddress && <Output {...outputProps} />}
        </div>
    )
}

function Input({ setUserAddress, setShowAddress }: any) {
    const [inputCep, setInputCep] = useState("");

    async function handleClick(): Promise<any> {
        const requestBody: any = {
            cep: inputCep
        }

        const response = await fetch("http://localhost:8000/api/cep", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        const { cep, street, neighborhood, city, state} = await response.json();
        setUserAddress({
            cep: cep,
            street: street,
            neighborhood: neighborhood,
            city: city,
            state: state
        });

        setInputCep("");
        setShowAddress(true);
    }

    return (
        <div className="w-50 h-50 flex-col border">
            <h1 className="text-center mb-1">Digite um CEP</h1>
            <input type="text" className="border w-1/1" value={inputCep} onChange={(e) => setInputCep(e.target.value)}/>
            <div className="flex justify-center my-1 ">
            <button onClick={handleClick} className="border">Enviar</button>
            </div>
        </div>
    )
}

function Output({ userAddress}: any) {
    return (
        <div className="w-1/2 border items-center">
            <div className="flex-col h-50 border">
                <UserOutput {...userAddress}/>
            </div>
        </div>
    )
}

export default InputCard