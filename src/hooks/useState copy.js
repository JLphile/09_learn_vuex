import { computed } from 'vue';
import { mapState, useStore } from 'vuex';
export function useState(mapper) {
  const store = useStore();

  // 封装思路：
  //mapState的返回值storeStateFns是一种对象形式：{key：function}，{key1：function1}...
  // 例如 name是 {key：function}的形式存储的
  // {counter:function,name:function,age:function,height:function}
  const storeStateFns = mapState(mapper);

  const storeState = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    // 取出函数，并绑定this
    const fn = storeStateFns[fnKey].bind({ $store: store });
    // 通过computed函数转成新对象格式{counter:ref,name:ref,age:ref,height:ref}
    storeState[fnKey] = computed(fn);
  });

  return storeState;
}
