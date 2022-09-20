<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <hr />
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <!-- 后面的payload格式是对象，所以参数写成 { n: 10 }-->
    <button @click="increment_n({ n: 10 })">+10</button>

    <hr />
    <!-- <button @click="add">+1</button> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { INCREMENT_N } from '../store/mutation-types';
export default {
  // methods: {
  //   ...mapMutations(['increment', 'decrement', INCREMENT_N]),
  //   ...mapMutations({
  //     add: 'increment',
  //   }),
  // },
  setup() {
    // storeMutations格式：{key:function，key1:function1}
    const storeMutations = mapMutations([
      'increment',
      'decrement',
      INCREMENT_N,
    ]);
    return {
      ...storeMutations,
    };
  },
};
</script>

<style scoped></style>
