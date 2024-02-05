import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    registros: [], 
  },
  mutations: {
    agregarRegistro(state, registro) {
      state.registros.push(registro);
    },
  },
  actions: {
    guardarRegistro({ commit }, registro) {
      commit('agregarRegistro', registro);
    },
  },
  getters: {
    obtenerRegistros: (state) => state.registros,
  },
});
