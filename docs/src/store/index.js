import { createStore } from 'vuex';

export default createStore({
  state: {
    input: '',
  },
  getters: {},
  mutations: {
    setInput(state, value) {
      state.input = value;
    },
    resetInput(state) {
      state.input = '';
    },
  },
  actions: {},
  modules: {},
});
