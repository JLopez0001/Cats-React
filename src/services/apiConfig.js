import axios from "axios";

let apiURL;

const apiURLs = {
  production: "www.cat-crud-api.heroku.com/api", //deployed heroku site
  development: "http://localhost::3000/api", //for local, must be connected to backend
};

if (window.location.hostname === "localhost") {
  apiURL = apiURLs.development;
} else {
  apiURL = apiURLs.production;
}

const api = axios.create({
  baseURL: apiURL,
});

export default api;
