import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b61590c4d4e4be081f8b74daa6290c3",
  },
});
