import axios from "axios";
import Config from "./config";

console.log("config", Config.baseUrl);
var api = axios.create({
  baseURL: Config.baseUrl,
  timeout: 300000
});

// 添加请求拦截器
api.interceptors.request.use(
  config => {
    const userid = localStorage.getItem("userid") || "";
    config.headers["user"] = userid;
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

const post = async (url, data) => {
  let response = await api.post(url, data).catch(error => {
    errorHeader(error);
  });
  return responseHeader(response);
};

const get = async (url, data) => {
  let response = await api.get(url, data).catch(error => {
    errorHeader(error);
  });
  return responseHeader(response);
};

/* 公共处理错误 */
const errorHeader = error => {
  console.log("error", error);
  let errorMsg =
    error.response && error.response.data && error.response.data.message;
  console.log("///", errorMsg);
};

/* 公共处理返回体 */
const responseHeader = response => {
  console.log("response", response);
  if (response && response.status === 200) {
    if (!response.data) {
      return {};
    }
    return response.data;
  }
  return null;
};

export { post, get };
