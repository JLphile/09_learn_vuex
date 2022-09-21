<template>
  <div>
    <hr />
    <h2>{{ homeCounter }}</h2>
    <h2>{{ doubleHomeCounter }}</h2>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1</button>
  </div>
</template>

<script>
// import {
//   mapState,
//   mapGetters,
//   mapMutations,
//   mapActions,
//   createNamespacedHelpers,
// } from 'vuex';
import { createNamespacedHelpers } from 'vuex';
import { useState, useGetters } from '../hooks/index';
const { mapActions, mapState, mapMutations, mapGetters } =
  createNamespacedHelpers('home');
export default {
  computed: {
    // 1.写法一
    // ...mapState({
    //   homeCounter: (state) => state.home.homeCounter,
    // }),
    // ...mapGetters({
    //   doubleHomeCounter: 'home/doubleHomeCounter',
    // }),
    // 2.写法二
    // ...mapState('home', ['homeCounter']),
    // ...mapGetters('home', ['doubleHomeCounter']),
    // 3.写法三
    // ...mapState(['homeCounter']),
    // ...mapGetters(['doubleHomeCounter']),
  },
  methods: {
    // 1.写法一
    // ...mapMutations({
    //   increment: 'home/increment',
    // }),
    // ...mapActions({
    //   incrementAction: 'home/incrementAction',
    // }),
    // 2.写法二
    // ...mapMutations('home', ['increment']),
    // ...mapActions('home', ['incrementAction']),
    // 3.写法三
    // ...mapMutations(['increment']),
    // ...mapActions(['incrementAction']),
  },
  setup() {
    // {homeCounter:function}
    const state = useState('home', ['homeCounter']);
    const getters = useGetters('home', ['doubleHomeCounter']);

    const mutations = mapMutations(['increment']);
    const actions = mapActions(['incrementAction']);

    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions,
    };
  },
};
</script>

<style scoped></style>
