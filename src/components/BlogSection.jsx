import React from 'react'
import blogPosts from './utils/blogPosts'
function BlogSection() {
  return (
    <div className="blog-section-2 ptb-100">
      <div className="container">
        <div className="blog-content-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-7">
              <div className="content">
                <div className="sub-title-2" data-aos="fade-down" data-aos-offset="100">
                  <p>Latest Blogs</p>
                </div>
                <h2 data-aos="fade-down" data-aos-offset="200">Latest News & Articles</h2>
                <p>AI systems can analyze data, recognize patterns, make decisions, and even adapt and improve over time.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-5" data-aos="fade-up" data-aos-offset="300">
              <div className="blog-content-btn">
                <a className="default-btn" href="blog.html">
                  <span>More Posts</span> <i className='bx bx-chevron-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <div className="blog-card">
                <div className="blog-img">
                  <img src={post.image} alt={post.title} className="transition" />
                  <ul className="blog-metainfo">
                    <li><i className='bx bx-calendar'></i> <a href="blog.html">{post.date}</a></li>
                    <li><i className='bx bx-time'></i>{post.readTime}</li>
                  </ul>
                </div>
                <div className="blog-info">
                  <h3><a href={post.link}>{post.title}</a></h3>
                  <a href={post.link} className="btn-link">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection