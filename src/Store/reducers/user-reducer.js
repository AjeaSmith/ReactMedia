const initialState = {
  loading: false,
  signupError: null,
  loginError: null
};

const userReducer = (state = initialState, action) => {
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
    case "LOGINERROR":
      return {
        ...state,
        loading: false,
       loginError: action.payload
      };
    case "SIGNUPERROR":
      return {
        ...state,
        loading: false,
        signupError: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
