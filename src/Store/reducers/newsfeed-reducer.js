const initialState = {
  loading: false,
  userFeeds: [],
  userFeed: [],
  comments: []
};

const newsfeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        userFeeds: action.payload
      };
    case "FETCH_ONE_SUCCESS":
      return {
        ...state,
        loading: false,
        userFeed: action.payload
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    default:
      return state;
  }
};
export default newsfeedReducer;
