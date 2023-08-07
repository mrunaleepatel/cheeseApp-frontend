import {useLoaderData, Form} from "react-router-dom"

function Show(props){
    const cheese = useLoaderData()
    return (
        <div className="cheese">
            <h2>{cheese.name}</h2>
            <p>Origin: {cheese.countryOfOrigin}</p>
            <img src={cheese.image} alt={cheese.name} />

            <h2>Update {cheese.name}</h2>
            <Form action={`/${cheese.id}?_method=PUT`} method="post">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="countryOfOrigin" placeholder="Country of Origin"/>
                <input type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value={`update ${cheese.name}`}/>
            </Form>
            <h2>Delete Cheese</h2>
            <Form action={`/delete/${cheese._id}`} method="post">
                <input type="submit" value={`Delete ${cheese.name}`} />
            </Form>
        </div>
    )
}

export default Show