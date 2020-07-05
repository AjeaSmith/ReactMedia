const initialState = {
  loading: false
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

    default:
      return state;
  }
};
export default newsfeedReducer;
