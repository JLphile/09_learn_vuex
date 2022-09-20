<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
    <hr />
    <h3>{{ nameInfo }}</h3>
    <h3>{{ ageInfo }}</h3>
    <h3>{{ heightInfo }}</h3>
    <hr />
    <!-- <h3>{{ sNameInfo }}</h3> -->
    <!-- <h3>{{ sAgeInfo }}</h3>
    <h3>{{ sHeightInfo }}</h3> -->
    <hr />
  </div>
</template>

<script>
import { useGetters } from '../hooks/useGetters';
export default {
  setup() {
    const storeGetters = useGetters(['nameInfo', 'ageInfo', 'heightInfo']);
    return {
      // sNameInfo,
      ...storeGetters,
    };
  },
};
</script>

<style scoped></style>
