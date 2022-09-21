const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 100,
    };
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    },
  },
  actions: {
    // incrementAction(context) {
    //   context.commit('increment');
    // },
    // 解构写法
    incrementAction({
      commit,
      dispatch,
      state,
      rootGetters,
      getters,
      rootState,
    }) {
      commit('increment');
      commit('increment', null, { root: true });
      // dispatch
      // dispatch('incrementAction', null, { root: true });
    },
  },
};
export default homeModule;
