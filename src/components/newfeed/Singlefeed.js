import React, { Fragment } from "react";

const Singlefeed = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap h-screen mt-6">
        <div className="w-full sm:w-1/2">
          <div className="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
            <div className="py-2 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <a
                  href="#"
                  className="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg"
                >
                  <img
                    className="rounded-full h-8 w-8 object-cover"
                    src="https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                    alt=""
                  />
                  <p className="ml-2 text-base font-medium">Jon Doe</p>
                </a>
              </div>
              <div className="flex flex-row items-center">
                <p className="text-xs font-semibold text-gray-500">
                  2 hours ago
                </p>
              </div>
            </div>
            <div className="mt-2">
              <img
                className="object-cover w-full rounded-lg"
                src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"
                alt=""
              />
            </div>
            <div class="py-2">
              <p class="leading-snug">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                ratione dicta deleniti, quas distinctio, veniam quo rem eveniet
                aliquid repudiandae fuga asperiores reiciendis tenetur? Eius
                quidem impedit et soluta accusamus.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-6">
          <div class="divide-y divide-gray-400">
            <div class="text-center py-2">
              <form className="bg-white rounded-lg pt-2">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea
                      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      name="body"
                      placeholder="Type Your Comment"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full md:w-full flex items-start md:w-full px-3">
                    <div className="-mr-1">
                      <input
                        type="submit"
                        className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                        value="Post Comment"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="py-2">
              <div class="flex bg-white shadow-lg rounded-lg">
                <div class="flex items-start px-4 py-6">
                  <img
                    class="w-12 h-12 rounded-full object-cover mr-4 shadow"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                  />
                  <div class="">
                    <div class="flex items-center justify-between">
                      <h2 class="text-lg font-semibold text-gray-900">
                        Brad Adams{" "}
                      </h2>
                      <small class="text-sm text-gray-700">22h ago</small>
                    </div>
                    <p class="mt-2 text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
                      dolor sit amet!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Singlefeed;
