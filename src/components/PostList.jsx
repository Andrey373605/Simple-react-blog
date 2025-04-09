import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./PostItem";
import React, { useEffect } from "react";
import { useRef } from "react";
import '../styles/App.css'


const PostList = ({posts, title, remove}) => {
    const nodeRefs = useRef({})
    
    
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                    No posts
            </h1>
        )
    }

    return ( 
        <div>
            <h1 style = {{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index)=>{
                    if(!nodeRefs.current[post.id]){
                        nodeRefs.current[post.id]=React.createRef()
                    }
                    return (
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames='post'
                            nodeRef={nodeRefs.current[post.id]}
                        >
                            <div ref={nodeRefs.current[post.id]}>
                                <PostItem remove={remove} post={post} number={index+1}/>
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
     );
}


 
export {PostList};