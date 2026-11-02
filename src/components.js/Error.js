import {useRouteError} from "react-router"

const Error=()=>{
    const error=useRouteError()
    console.log(error)
    return (
        <div>
        <h2>Page not Found</h2>
        <h2>{error.status}:{error.statusText}</h2>
        Error: {error.data}
        </div>
    )
}

export default Error