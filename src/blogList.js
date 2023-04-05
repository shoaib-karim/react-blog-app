import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-card">
      <h1>{title}</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <img src="./blog-banner.png" alt="Flexbox Feature"></img>
              <h2>{blog.title}</h2>
              <p>Blog Genre : {blog.tags}</p>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
