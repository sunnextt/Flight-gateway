import userTypes from '../../Types';

const INITIAL_STATE = {
  airport: null,

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SEARCH_AIRPORT:
      return {
        ...state,
        airport: action.payload
      }
    default:
      return state;
  }
};

export default userReducer;