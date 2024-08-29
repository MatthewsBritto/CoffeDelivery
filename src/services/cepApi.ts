import { AdressType } from "../types/adress"


export async function searchCep(cepnumber: number) {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cepnumber}/json/`)
    if (!res.ok){
      throw new Error(`Response status: ${res.status}`)
    }

    const json:AdressType = await res.json()
    return json
  } catch (error) {
    console.error(error)
  }
}