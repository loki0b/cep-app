'use client'

import { useState, useEffect } from "react";

const UserInput = () => {
    const [cep, setCep] = useState("");
    const [city, setCity] = useState("");
    const [showCity, setShowCity] = useState(false);

    useEffect(() => {
        setShowCity(true);
    }, [city]);

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
        const { city } = body;

        setCep("");
        setCity(city);
    }

    

    return (
        <div>
            <h1>Digite um CEP</h1>
            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}/>
            <button onClick={handleClick}>Enviar</button>
            {showCity && <h1>{city}</h1>}
        </div>
    )
}

export default UserInput;