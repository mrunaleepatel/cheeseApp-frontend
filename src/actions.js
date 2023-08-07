import { redirect } from "react-router-dom";
import {baseUrl} from "./base_url";

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"), 
        image: formData.get("image"),
    }
    await fetch(`${baseUrl}/cheese`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese),
    })
    return redirect("/");
}

export const updateAction = async ({request, params}) => {
    const id = params.id
    const formData = await request.formData()
    const updatedCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"), 
        image: formData.get("image"),
    }
    await fetch(`${baseUrl}/cheese/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(updatedCheese)
        })
        return redirect("/");
}

export const deleteAction = async ({params}) => {
    const id = params.id
    await fetch(`${baseUrl}/cheese/${id}`, {
        method: "delete",
    })
    return redirect("/");
}
