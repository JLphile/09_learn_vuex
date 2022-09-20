// 再次封装
import { computed } from 'vue';
import { useStore } from 'vuex';
export function useMapper(mapper, mapFn) {
  // 拿到store 独享
  const store = useStore();
  // 获取到对应的对象的functions:{name：function，age：function}
  const storeStateFns = mapFn(mapper);
  // 对数据进行转换
  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });
  // storeState转化成{key:ref}形式的对象
  return storeState;
}
