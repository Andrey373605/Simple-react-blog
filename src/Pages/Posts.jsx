import React, { useEffect, useState } from "react";
import { PostList } from "../components/PostList";
import "../styles/App.css"
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import { MyModal } from "../components/UI/modal/MyModal";
import { MyButton } from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { usePagination } from "../hooks/usePagination";
import { Pagination } from "../components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(0)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page)=>{
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    
    useEffect(()=>{
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const changePage = (page)=>{
        setPage(page)
        fetchPosts(limit, page)
    }

  
    return (
        <div className="App">
            <MyButton 
                onClick={()=>setModal(true)}
                style={{marginTop: 30}}
            >
                Create post
            </MyButton>

            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>
            
            <hr style={{margin: "15px"}}></hr>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            
            {postError && 
                <h1>Error {postError}</h1>
            }

            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} title="List of posts" remove={removePost}/>
            }

            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
 
        </div>

    );
}

export {Posts}
