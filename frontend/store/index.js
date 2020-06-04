import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth'

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

const store = new Vuex.Store({
  state: () => ({
  }),
  mutations: {
  },
  modules: {
    auth,
  },
  plugins,
})


export default () => store