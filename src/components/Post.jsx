import { render } from "@testing-library/react"
import { useState } from "react"

function Post(props){
    const [post, setPost] = useState(0)

    return <div className="post">
        <div className="post__content">
            <strong>{props.id}. {props.title}</strong>
            <div>
                {props.description}
            </div>
        </div>
        <div className="post__btns">
            <button>delete</button>
        </div>
    </div>
}


export {Post}