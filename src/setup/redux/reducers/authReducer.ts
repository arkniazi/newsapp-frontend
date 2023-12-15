import { AuthState } from "../types/actionTypes";

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
  accessToken: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.payload).length,
        user: action.payload.user,
        accessToken: action.payload.access_token,
      };
    case 'UPDATE_USER_PROFILE':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
