import axios from "axios";
import router from "@/router";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    login({ commit, dispatch }, req) {
      return new Promise((resolve, reject) => {
        // const uuid = get_uuid();
        axios({
          method: "POST",
          url: "http://localhost:5000/login",
          data: {
            email: req.email || "",
            password: req.password || "",
          },
        })
          .then((res) => {
            resolve(res);
            // const user_data = res.data.data;
            // const token = res.data.data.access_token;

            // delete user_data.access_token;
            // set_session({ ...user_data, access_token: token, uuid: uuid });
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
