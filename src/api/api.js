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
    console.warn("Obsolete method. Please use profileApi object");
    return profileAPI.getProfile(userId);
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

};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId).then((response) => {
      return response.data;
    });
  }, 
  updateStatus(status) {
    return instance.put('profile/status', {status: status}).then((response) => {
      return response.data;
    });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      return response.data;
    });
  },
  saveProfile(profile) {
    return instance.put('profile', profile).then((response) => {
      return response.data;
    });
  }
};

export const authAPI = {
  getLogin() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then((response) => {
      return response.data;
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  }
}
