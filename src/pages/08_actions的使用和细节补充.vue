<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    // 派发风格1
    increment() {
      this.$store.dispatch('incrementAction', { count: 100 });
    },
    // 派发风格2
    decrement() {
      this.$store.dispatch({
        type: 'decrementAction',
      });
    },
  },
  mounted() {
    this.$store.dispatch('getHomeMultidata');
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
