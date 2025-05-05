// src/reducers/adminUserReducer.js
const adminUsersReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_USER':
        return { ...state, [action.payload._id]: action.payload };
      case 'DELETE_USER':
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      default:
        return state;
    }
  };
  
  export default adminUsersReducer;
  
  