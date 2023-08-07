import { baseUrl } from "./base_url";

export const cheesesLoader = async () => {
    const response = await fetch(`${baseUrl}/cheese`)
    const cheeses = await response.json()
    return cheeses
}

export const cheeseLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    const cheese = await response.json()
    return cheese
}
