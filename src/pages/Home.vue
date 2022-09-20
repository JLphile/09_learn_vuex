<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <hr />
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen">+10</button>

    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    addTen() {
      // this.$store.commit('incrementN', 10);
      this.$store.commit('incrementN', {
        n: 10,
        name: 'why',
        age: 18,
      });
    },
  },
};
</script>

<style scoped></style>
