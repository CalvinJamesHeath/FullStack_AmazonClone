import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-e21b2/us-central1/api", //api (cloud function) URL
});

export default instance;
