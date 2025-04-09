import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostService } from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/loader/Loader'

export function PostIdPage(props) {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id)=>{
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async (id)=>{
        const response = await PostService.getCommentsById(id)
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return (
        <div>
            {isLoadingPost
                ? 
                    <Loader/>
                : <div> 
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}
                    </p>
                </div>
            }

                <div>
                    <h2>Comments</h2>
                    {comments.map((c)=>
                        <div style={{margin: '15px'}}>
                            <h4>{c.name}</h4>
                            <i>{c.email}</i>
                            <p>
                                {c.body}
                            </p>
                        </div>
                    )}
                </div>
            
        </div>
    )
}
