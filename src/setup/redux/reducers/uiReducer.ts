import { UiState } from "../types/actionTypes";

interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

type UiActionTypes = SetLoadingAction;

const initialState: UiState = {
  loading: false,
};

const uiReducer = (state: UiState = initialState, action: UiActionTypes): UiState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
