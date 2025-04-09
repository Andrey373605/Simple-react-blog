import React, { useState } from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'


export default function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        setPost({ ...post, title: '', body: '' })
        create(newPost)
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Title"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Description"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    )
}

