import axios from "axios"

export class PostService {
    static async getAll(limit=10, page=1) {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        }
        )
        return response
    }

    static async getById(id) {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return response
    }

    static async getCommentsById(id) {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments',{
            params : {
                postId: id
            }
        })
        return response
    }
}