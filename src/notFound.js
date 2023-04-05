import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <Link to="/">Click Here</Link>
    </div>
  );
};

export default NotFound;
