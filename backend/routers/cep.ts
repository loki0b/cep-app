import { Router } from "express";
import type { Request, Response } from "express";

const cepRoute: Router = Router();
const host: string = "https://brasilapi.com.br/api/cep/v1/"

cepRoute.post("/", getAddress);

async function getAddress(request: Request, response: Response) {
    const body: any = request.body;
    const cep: string = body.cep;

    const res: any = await fetch(`${host}/${cep}`);
    const payload: any = await res.json();

    response.status(200).send(payload);
    console.log(`${request.method} /api/cep 200`)
}

export default cepRoute;