import { useState } from "react"
import { MyButton } from "./UI/button/MyButton"
import { useNavigate } from "react-router-dom"


function PostItem(props){
    const navigate = useNavigate()

    function transitToPost(id){
        navigate(`/posts/${id}`, {replace: true})
    }

    return <div className="post">
        <div className="post__content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
        </div>
        <div className="post__btns">
            <MyButton onClick={()=>transitToPost(props.post.id)}>
                open
            </MyButton>
            <MyButton onClick={()=>props.remove(props.post)}>
                delete
            </MyButton>
        </div>
    </div>
}


export {PostItem}