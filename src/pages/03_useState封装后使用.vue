<template>
  <div>
    <h2>Home:{{ $store.state.counter }}</h2>
    <hr />
    <h2>Home:{{ counter }}</h2>
    <h2>Home:name-{{ name }}</h2>
    <h2>Home:age-{{ age }}</h2>
    <h2>Home:height-{{ height }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from '../hooks/useState';
export default {
  setup() {
    const storeState = useState(['counter', 'name', 'age', 'height']);

    return {
      ...storeState,
    };
  },
};
</script>

<style scoped></style>
