<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <hr />
    <h2>Home:{{ sCounter }}</h2>
    <h2>Home:{{ counter }}</h2>
    <h2>Home:name-{{ name }}</h2>
    <h2>Home:age-{{ age }}</h2>
    <h2>Home:height-{{ height }}</h2>
    <hr />
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    // 方法一：
    const sCounter = computed(() => store.state.counter);

    // 方法二：
    //mapState的返回值storeStateFns是一种对象形式：{key：function}，{key1：function1}...
    // 例如 name是 {key：function}的形式存储的
    // {counter:function,name:function,age:function,height:function}

    const storeStateFns = mapState(['counter', 'name', 'age', 'height']);

    const storeState = {};
    Object.keys(storeStateFns).forEach((fnKey) => {
      // 取出函数，并绑定this
      const fn = storeStateFns[fnKey].bind({ $store: store });
      // 通过computed函数转成新对象格式{counter:ref,name:ref,age:ref,height:ref}
      storeState[fnKey] = computed(fn);
    });

    return {
      sCounter,
      ...storeState,
    };
  },
};
</script>

<style scoped></style>
