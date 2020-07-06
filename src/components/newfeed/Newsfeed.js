import React from "react";
import { Link } from "react-router-dom";
const Newsfeed = ({ feeds }) => {
  return (
    <div className="flex justify-between mx-6 flex-wrap">
      {feeds.map((feed, i) => {
        return (
          <div
            className="max-w-sm w-full lg:max-w-full lg:flex mb-3 sm:mb-0 lg:mb-3"
            key={i}
          >
            <div
              className="h-64 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url(${feed.photo})`
              }}
              title="Woman holding a mug"
            ></div>
            <div className="w-full h-auto border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <Link to={`/newsfeed/${feed.feedId}`}>
                    <i className="far fa-eye text-green-500"></i>
                    <span className="ml-2 text-green-500">View Feed</span>
                  </Link>
                </p>
                <p className="text-gray-700 text-base">{feed.content}</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={`${feed.userImage}`}
                  alt={`Avatar of ${feed.username}`}
                />
                <div className="text-sm">
                  <Link to="/profile/2" className="text-green-500 leading-none">
                    {feed.username}
                  </Link>
                  <p className="text-gray-600">
                    {feed.createdAt} | <span>{feed.commentCount} Comments</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="max-w-sm w-full lg:max-w-full lg:flex mb-3 sm:mb-0 lg:mb-3">
        <div
          className="h-64 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)"
          }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <Link to="/singlefeed/3">
                <i className="far fa-eye text-green-500"></i>
                <span className="ml-2 text-green-500">View Feed</span>
              </Link>
            </p>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              suscipit illum quod voluptates quibusdam cupiditate enim atque
              aliquam corrupti minus velit totam blanditiis, delectus sed, fuga
              cumque libero iusto incidunt soluta Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Facilis architecto labore debitis
              reiciendis suscipit hic?
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <Link to="/profile/4" className="text-green-500 leading-none">
                Jonathan Reinink
              </Link>
              <p className="text-gray-600">
                Aug 18 | <span>No Comments</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     */}
    </div>
  );
};
export default Newsfeed;
