import React, { Fragment } from "react";
import Newsfeed from "../newfeed/Newsfeed";
const Home = () => {
  return (
    <Fragment>
      <h2 className="text-2xl ml-6 my-3">Latest Feeds</h2>
      <Newsfeed />
    </Fragment>
  );
};
export default Home;
