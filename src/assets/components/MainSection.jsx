import React from 'react'

export default function MainSection() {
  return (
    <>
    <section id="about" className="about container">
        <h2>About Me</h2>
        <p>Hello! I'm a passionate writer sharing my thoughts and experiences.</p>
    </section>

    <div id="posts" className='post-sc container p-2'>
          <h2>Latest Posts</h2>
         <div className='post-list container'>
          <div className="posts-main col-sm-6 p-2">
                <h3>Post Title 1</h3>
                <p>Brief description of the post...</p>
                <a href="#">Read more</a>
            </div>
            <div className="posts-main col-sm-6 p-2">
                <h3>Post Title 2</h3>
                <p>Brief description of the post...</p>
                <a href="#">Read more</a>
            </div>
         </div>
         <h2>...</h2>
    </div>
    </>
  )
}
