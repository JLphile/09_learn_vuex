<template>
  <div>
    <hr />
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from '../hooks/useState';
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
