import axios from "axios";
import { logOutRedirectCall } from "../Components/Pages/Common/RedirectPathMange";

const showMessage = (msg) => {
  //console.log("momo",msg)
}
const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      'api-key':'APIGLASSESAPI',
      'Content-Type': 'text/plain'
    }
  });

  axiosClient.interceptors.request.use(function (config) {
    config.headers['token']=localStorage.getItem("token")
    return config;
  });

  axiosClient.interceptors.response.use(
    function (response) {
      if(response.data.code==0){
        showMessage(response.data)
      }
      return response;
    }, 
    function (error) {
      let res = error.response;
      if (res.status == 401) {
       // showMessage(res.data)
         logOutRedirectCall()
      }
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
  );

  export {axiosClient};
  
  