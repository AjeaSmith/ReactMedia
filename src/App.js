import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Createfeed from "./components/newfeed/Createfeed";
import Singlefeed from "./components/newfeed/Singlefeed";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Fragment>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Createfeed} />
          <Route path="/newsfeed/:id" component={Singlefeed} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
