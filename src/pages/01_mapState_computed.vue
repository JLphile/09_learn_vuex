<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home-name:{{ sName }}</h2>

    <!-- <h2>Home:{{ counter }}</h2>
    <h2>Home:name-{{ name }}</h2>
    <h2>Home:age-{{ age }}</h2>
    <h2>Home:height-{{ height }}</h2> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    // 自身组件的计算属性
    fullName() {
      return 'Han meimei';
    },
    // 从state中获取数据
    // ...mapState(['counter', 'name', 'age', 'height']),
    ...mapState({
      sCounter: (state) => state.counter,
      sName: (state) => state.name,
    }),
  },
};
</script>

<style scoped></style>
