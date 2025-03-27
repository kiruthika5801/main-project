const initialState = {
    users: [],
  };
  
  const userReducer = (state = initialState, action) => {
    console.log("Action Received in Reducer:", action);
    switch (action.type) {
      case "REGISTER_USER":
        console.log("User Registered Successfully:", action.payload);
        return {
          ...state,
          users: [...state.users, action.payload], // ✅ Store new users in array
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  