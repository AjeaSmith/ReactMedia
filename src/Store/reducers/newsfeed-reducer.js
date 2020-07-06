const initialState = {
  loading: false,
  userFeeds: []
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
    default:
      return state;
  }
};
export default newsfeedReducer;
