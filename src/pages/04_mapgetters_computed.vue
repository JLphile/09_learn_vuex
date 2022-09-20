<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
    <hr />
    <h3>{{ nameInfo }}</h3>
    <h3>{{ ageInfo }}</h3>
    <h3>{{ heightInfo }}</h3>
    <hr />
    <h3>{{ sNameInfo }}</h3>
    <h3>{{ sAgeInfo }}</h3>
    <h3>{{ sHeightInfo }}</h3>
    <hr />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { useState } from '../hooks/useState';
export default {
  computed: {
    ...mapGetters(['nameInfo', 'ageInfo', 'heightInfo']),
    ...mapGetters({
      sNameInfo: 'nameInfo',
      sAgeInfo: 'ageInfo',
      sHeightInfo: 'heightInfo',
    }),
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
