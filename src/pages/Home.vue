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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    // 1.写法一
    ...mapState({
      homeCounter: (state) => state.home.homeCounter,
    }),
    ...mapGetters({
      doubleHomeCounter: 'home/doubleHomeCounter',
    }),
    // 2.写法二
    // ...mapState('home', ['homeCounter']),
    // ...mapGetters('home', ['doubleHomeCounter']),
    // 3.写法三
    // ...mapState(['homeCounter']),
    // ...mapGetters(['doubleHomeCounter']),
  },
  methods: {
    ...mapMutations({
      increment: 'home/increment',
    }),
    ...mapActions({
      incrementAction: 'home/incrementAction',
    }),
  },
};
</script>

<style scoped></style>
