import { ArticleState } from "../types/actionTypes";

const initialState: ArticleState = {
  articleList: [],
  articleDetail: {},
  pagination: {
    currentPage: 1,
    itemsPerPage: 15,
    lastPage: 1,
  },
  categories: [],
  sources: [],
  authors: [],
};

const articleReducer = (state: ArticleState = initialState, action: any) => {
  switch (action.type) {
    case 'GET_ALL_ARTICLES':
      return {
        ...state,
        articleList: action.payload,
      };
    case 'GET_ARTICLE_DETAIL':
      return {
        ...state,
        articleDetail: action.payload,
      };
    case 'GET_ARTICLE_META':
      return {
        ...state,
        categories: action.payload.categories,
        sources: action.payload.sources,
        authors: action.payload.authors,
      };
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: action.payload,
      };
    case 'RESET_NEWS_STATE':
      return initialState;
    default:
      return state;
  }
};

export default articleReducer;
