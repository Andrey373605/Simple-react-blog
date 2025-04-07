import { useState } from "react"

const Counter = () => {
    const [likes, setLike] = useState(0)

    function increment(){
        setLike(likes + 1)
    }

    function decrement(){
        setLike(likes - 1)
    }

    return <div>
        <h1>{likes}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
}

export { Counter }