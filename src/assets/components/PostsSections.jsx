import React from 'react'

export default function PostsSections() {
  return (
    <>
      <section className="posts container" id='posts'>
        <h2>Latest Posts</h2>
        <div className="posts-grid">
            <div className="post-card">
                <img src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg" alt="Post Image" />
                <div className="post-card-content">
                    <h3>Post Title 1</h3>
                    <p>A brief summary of the first post. Discover more about this topic...</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div className="post-card">
                <img src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg" alt="Post Image" />
                <div className="post-card-content">
                    <h3>Post Title 2</h3>
                    <p>A brief summary of the second post. Dive into the details...</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div className="post-card">
                <img src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg" alt="Post Image"/>
                <div className="post-card-content">
                    <h3>Post Title 3</h3>
                    <p>A brief summary of the third post. Learn more about this...</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div className="post-card">
                <img src="https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg" alt="Post Image" />
                <div className="post-card-content">
                    <h3>Post Title 4</h3>
                    <p>A brief summary of the fourth post. Explore the insights...</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
