import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "d2e558df-7db3-46f2-b3a0-055409076435" },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance
      .get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async getFollow(id) {
    const response = await instance.post(`follow/${id}`);
    return response.data;
  },
  async getUnfollow(id) {
    const response = await instance.delete(`follow/${id}`);
    return response.data;
  },

};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instance.get('profile/status/' + userId);
    return response.data;
  }, 
  async updateStatus(status) {
    try {
    const response = await instance.put('profile/status', { status: status });
    return response.data;
    } catch(error) {
      alert(error)
    }
  },
  async savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    const response = await instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },
  async saveProfile(profile) {
    const response = await instance.put('profile', profile);
    return response.data;
  }
};

export const authAPI = {
  async getLogin() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },
  async login(email, password, rememberMe = false, captcha = null) {
    const response = await instance.post(`auth/login`, { email, password, rememberMe, captcha });
    return response.data;
  },
  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
