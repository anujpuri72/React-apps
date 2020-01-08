import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID d723401a374da44febb4c2fed0c4f1657e5227000767a38d3695b2464b44bb58"
  }
});
