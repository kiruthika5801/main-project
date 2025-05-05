export const updateUser = (userData) => ({
    type: 'UPDATE_USER',
    payload: userData,
  });
  
  export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
  });
  