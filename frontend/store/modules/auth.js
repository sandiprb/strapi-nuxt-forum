import axios from 'axios'
import { URLS } from '~/constants'
import { isValidJwt } from '~/utils/auth'

const initialState = () => ({
  jwt: null,
  user: {
    id: null,
    username: null,
    email: null,
  },
})

const state = initialState

const getters = {
  isAuthenticated(state) {
    if(!state.jwt) return
    return isValidJwt(state.jwt)
  },
}

const mutations = {
  setState(state, { jwt, user = {} }) {
    state.jwt = jwt
    const { id, username, email } = user
    Object.assign(state.user, { id, username, email })
  },
}

const actions = {
  async socialLoginCallback({ commit }, { provider, params }) {
    const url = URLS.socialLoginCallback(provider)
    const { status, data } = await axios.get(url, { params })
    if (status === 200) {
      commit('setState', data)
    }
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
}
