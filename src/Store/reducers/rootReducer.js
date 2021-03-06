import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import newsfeedReducer from "./newsfeed-reducer";
import profileReducer from "./profile-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsfeedReducer,
  profile: profileReducer
});
export default rootReducer;
