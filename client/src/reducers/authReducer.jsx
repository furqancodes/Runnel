import { SIGN_IN, SIGN_OUT } from "../actions/types";
const INTIAL_STATE = {
  isSignedIn: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
