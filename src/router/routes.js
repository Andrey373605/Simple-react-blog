import { About } from "../Pages/About";
import { PostIdPage } from "../Pages/PostIdPage";
import { Posts } from "../Pages/Posts";

export const routes = [
    {path: 'posts/', component: <Posts/>},
    {path: 'about/', component: <About/>},
    {path: 'posts/:id/', component: <PostIdPage/>},
    {path: '*', component: <Posts/>},
]