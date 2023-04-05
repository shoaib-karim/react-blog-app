import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{Error}</div>}
      {blog && (
        <article class="blog-layout">
          <h2>{blog.title}</h2>
          <p>genre : {blog.tags}</p>
          <div>{blog.body}</div>
          <button className="button" onClick={handleClick}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
