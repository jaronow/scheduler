export default {
  setToken (state, token) {
    state.token = token
    if (token) {
      state.isLoggedIn = true
    } else {
      state.isLoggedIn = false
    }
  },
  setUser (state, user) {
    state.user = user
    if (user.admin === true && user.employee === true) {
      state.isAdmin = true
      state.isEmployee = true
    } else if (user.employee === true) {
      state.isAdmin = false
      state.isEmployee = true
    } else {
      state.isAdmin = false
      state.isEmployee = false
    }
  },
  logout (state) {
    state.user = ''
    state.token = ''
    state.isLoggedIn = ''
    state.isAdmin = ''
    state.isEmployee = ''
  }
};
