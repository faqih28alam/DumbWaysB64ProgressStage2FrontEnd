// posts.tsx

import { Link, Outlet } from "react-router-dom"


// Dummy data
const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
]

export default function Posts() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-4 font-bold">Posts Page</h1>        
            <ul className="mb-4">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} className="text-blue-500 underline">{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet /> 
        </div>
    )
}