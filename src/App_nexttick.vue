<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>
    <h2 class="title" ref="titleRef">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated, nextTick } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const message = ref('');
    const titleRef = ref(null);
    const addMessageContent = () => {
      message.value += '哈哈哈哈哈';
      // 更新DOM后再执行nextTick
      nextTick(() => console.log(titleRef.value.offsetHeight));
    };
    const increment = () => counter.value++;
    // onUpdated(() => {
    //   console.log(titleRef.value.offsetHeight);
    // });
    return {
      message,
      addMessageContent,
      titleRef,
      counter,
      increment,
    };
  },
};
</script>

<style scoped>
.title {
  width: 120px;
}
</style>
