const initialState = {
  loading: false,
  authError: null,
  user: []
};

const profileReducer = (state = initialState, action) => {
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
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        user: [action.payload]
      };
    default:
      return state;
  }
};
export default profileReducer;
