import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// Response Interceptor
// Called whenever there is a success/error for each response
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("An unexpected error occured");
    // toast.success
    // toast.info
    logger.log(error);
    logger.log(error.response);
    toast.error(error.response.data);
  } else {
    toast.error(error.response.data);
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  // Set common header for PUT/POST/GET/etc.
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
