import axios from 'axios';
import configData from '../../../config.json';
import { GET_ALL_ARTICLES, GET_ARTICLE_DETAIL, SET_LOADING, SET_PAGINATION, GET_ARTICLE_META } from '../types/actionTypes';
import { Dispatch } from 'redux';

const API_URL = configData.SERVER_URL;

export const GET_ARTICLE_DETAIL_URL = `${API_URL}/articles`;
export const GET_ARTICLE_META_URL = `${API_URL}/articles-meta`;

interface PaginationData {
  currentPage: number;
  lastPage: number;
  itemsPerPage: number;
}

export const getAllArticles = (params: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const res = await axios
        .get(`${API_URL}/articles`, {
          params: params,
        })
        .then((res) => res.data);
      if (res) {
        const paginationData: PaginationData = {
          currentPage: res.meta.current_page,
          lastPage: res.meta.last_page,
          itemsPerPage: res.meta.per_page,
        };
        await dispatch({ type: GET_ALL_ARTICLES, payload: res.data });
        await dispatch({ type: SET_PAGINATION, payload: paginationData });
        await dispatch({ type: SET_LOADING, payload: false });
        return true;
      }
    } catch (e: any) {
      const error: string = await e.message;
      console.log('Request Error', error);
      dispatch({ type: SET_LOADING, payload: false });
      return false;
    }
  };
};

export const getArticleDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const res = await axios.get(`${API_URL}/articles/${id}`).then((res) => res.data);
      if (res) {
        await dispatch({ type: GET_ARTICLE_DETAIL, payload: res.data });
        await dispatch({ type: SET_LOADING, payload: false });
        return true;
      }
    } catch (e: any) {
      const error: string = await e.message;
      console.log('Request Error', error);
      dispatch({ type: SET_LOADING, payload: false });
      return false;
    }
  };
};

export const getArticleMeta = (values: any) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const res = await axios
        .get(`${API_URL}/articles-meta`, {
          params: values,
        })
        .then((res) => res.data);
      if (res) {
        await dispatch({ type: GET_ARTICLE_META, payload: res });
        await dispatch({ type: SET_LOADING, payload: false });
        return true;
      }
    } catch (e: any) {
      const error: string = await e.message;
      console.log('Request Error', error);
      dispatch({ type: SET_LOADING, payload: false });
      return false;
    }
  };
};
