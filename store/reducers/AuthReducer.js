import LOGIN from '../actions/types';
import LOGIN_SUCCESS from '../actions/types';
import LOGIN_FAILED from '../actions/types';

const INITAL_STATE = {
  user: null,
  loading: false,
  error: ''
};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_FAILED:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
};
