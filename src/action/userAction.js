
export const registerUser = (userData) => {
      console.log("Action Creator Called with:", userData);
    return {
      type: "REGISTER_USER",
      payload: userData,
    };
  };
  