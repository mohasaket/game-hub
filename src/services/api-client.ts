import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
//declare as local constant
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b61590c4d4e4be081f8b74daa6290c3",
  },
});

class APIClient<T> {
  endpoint: string;
  static getAll: any;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
