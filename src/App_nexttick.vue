<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>

<script>
import { ref, onUpdated } from 'vue';

export default {
  setup() {
    const message = ref('');
    const titleRef = ref(null);
    const addMessageContent = () => {
      message.value += '哈哈哈哈哈';
    };
    onUpdated(() => {
      console.log(titleRef);
    });
    return {
      message,
      addMessageContent,
      titleRef,
    };
  },
};
</script>

<style scoped>
.title {
  width: 120px;
}
</style>
