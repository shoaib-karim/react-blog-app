import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import BlogSlider from "./BlogSlider";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route exact path="/blogslider">
            <BlogSlider />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
