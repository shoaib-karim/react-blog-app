import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTag] = useState("Select a tag");
  const [isPending, seIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, tags };

    seIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog Added to Jason Server");
      seIsPending(false);
      // history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Tags</label>
        <select value={tags} onChange={(e) => setTag(e.target.value)}>
          <option value="select">Select a tag</option>
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
          <option value="adventure">Adventure</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="novel">Novel</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;
