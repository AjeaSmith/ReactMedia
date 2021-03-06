import React, { Fragment, useEffect } from "react";
import Newsfeed from "../newfeed/Newsfeed";
import { connect } from "react-redux";
import { fetchFeeds } from "../../Store/actions/newsfeed-actions";
import LoadingSpinner from "../spinner/LoadingSpinner";
const Home = ({ getFeeds, isloading, feeds }) => {
  useEffect(() => {
    getFeeds();
  }, [getFeeds]);
  return (
    <Fragment>
      {!feeds.length ? (
        <h2 className="text-2xl ml-6 my-3">No Feeds</h2>
      ) : (
        <h2 className="text-2xl ml-6 my-3">Latest Feeds</h2>
      )}

      {isloading ? <LoadingSpinner /> : <Newsfeed feeds={feeds} />}
    </Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isloading: state.news.loading,
    feeds: state.news.userFeeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFeeds: () => dispatch(fetchFeeds())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
