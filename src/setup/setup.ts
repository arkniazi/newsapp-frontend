import { AxiosInstance } from "axios";
import { Store } from "redux";
import { RootState } from "./redux/types/actionTypes";

export default function setupAxios(axios: AxiosInstance, store: Store<RootState>) {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      config.headers.Accept = 'application/json';

      return config;
    },
    (err) => Promise.reject(err)
  );
}
