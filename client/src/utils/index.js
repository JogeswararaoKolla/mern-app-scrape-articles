import axios from "axios";

export default {
  getNews: function(URL) {
    return axios.get(URL);
  }
};
