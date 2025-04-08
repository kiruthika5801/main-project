const initialState = {
  users: [],
  loggedInUser: null, // ✅ Track logged-in user
};

const userReducer = (state = initialState, action) => {
  console.log("Action Received in Reducer:", action);
  switch (action.type) {
    case "REGISTER_USER":
      console.log("User Registered Successfully:", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload], // ✅ Store new users in array
        loggedInUser: action.payload,            // ✅ Also log them in immediately
      };
      case "LOGIN_USER":
      console.log("User Logged In:", action.payload);
      return {
        ...state,
        loggedInUser: action.payload, // ✅ Store logged-in user
      };
      
    default:
      return state;
  }
};

export default userReducer; 