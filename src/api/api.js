import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "d2e558df-7db3-46f2-b3a0-055409076435" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getFollow(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getLogin() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
