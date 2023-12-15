export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const SET_LOADING = 'SET_LOADING';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';

export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ARTICLE_DETAIL = 'GET_ARTICLE_DETAIL';
export const SET_PAGINATION = 'SET_PAGINATION';
export const GET_ARTICLE_META = 'GET_ARTICLE_META';
export const RESET_NEWS_STATE = 'RESET_NEWS_STATE';



// --------------- State Types
export interface AuthState {
  isAuthenticated: boolean;
  user: any; 
  accessToken: any;
}

export interface ArticleState {
  articleList: any[];
  articleDetail: any;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    lastPage: number;
  };
  categories: any[];
  sources: any[];
  authors: any[];
}


export interface RootState {
  auth: AuthState;
  article: ArticleState;
}


// -------- Form Values 
export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}