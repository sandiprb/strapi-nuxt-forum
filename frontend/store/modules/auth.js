import axios from 'axios'
import merge from 'lodash/merge'
import pick from 'lodash/pick'
import assign from 'lodash/assign'
import { URLS } from '~/constants'

const initialState = () => ({
  jwt: null,
  user: {
    id: null,
    username: null,
    email: null,
    provider: null,
    confirmed: true,
    blocked: null,
    created_at: null,
    updated_at: null,
  },
})

const state = initialState

const getters = {}

const mutations = {
  setState(state, data) {
    assign(state, pick(data, keys(state)))
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
