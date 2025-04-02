
export const registerUser = (userData) => {
  console.log("Action Creator Called with:", userData);
return {
  type: "REGISTER_USER",
  payload: userData,
};
};
export const loginUser = (userData) => {
  console.log("Login Action Called with:", userData);
  return {
    type: "LOGIN_USER",
    payload: userData, // ✅ Store the logged-in user's details
  };
};

  