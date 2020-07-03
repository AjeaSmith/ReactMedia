const initialState = {
  loading: false,
  authError: null
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
    case "AUTHERROR":
      return {
        ...state,
        loading: false,
        authError: action.payload
      };
    default:
      return state;
  }
};
export default profileReducer;