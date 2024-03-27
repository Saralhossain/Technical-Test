import axios from "axios";
const Axios = axios.create({
  baseURL: "mongodb://localhost:27017/technical-test",
});
export default Axios;
