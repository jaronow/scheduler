import api from '@/services/api'

export default {
  register (credentials) {
    return api().post('register', credentials)
  },
  create (credentials) {
    return api().post('login', credentials)
  }
}
