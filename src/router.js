import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import { cheeseLoader, cheesesLoader } from "./loaders"
import { createAction, deleteAction, updateAction } from "./actions"

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={cheesesLoader}/>
        <Route path=":id" element={<Show/>} loader={cheeseLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
    ))

export default router