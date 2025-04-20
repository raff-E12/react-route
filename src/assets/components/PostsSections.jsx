import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';

export default function PostsSections() {
    const [isPosts, SetPosts] = useState([]);
    const navigate_pages = useNavigate();

    async function handlePostsExport() {
        try {
            const fetch_response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const data = (await fetch_response).data;
            console.log(data);
            return SetPosts(data);
        } catch (error) {
            console.error(error);
            throw new Error("Api is not Response!!");
        }
    }

    useEffect(() => { handlePostsExport() },[]);
  return (
    <>
      <section className="posts container" id='posts'>
        <h2>Latest Posts</h2>
        <div className="posts-grid">
            {isPosts.length === 0 ? <h2>Loading...</h2> : isPosts.map((post, index) =>{
                return(
                    <>
                      <div className="post-card" key={index}>
                        <img src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg" alt="Post Image" />
                        <div  className="post-card-content">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => navigate_pages(`/news/${post.id}/${post.title}`)} className='btn btn-primary'>Show More</button>
                        </div>
                      </div>
                    </>
                )
            })}
        </div>
    </section>
    </>
  )
}