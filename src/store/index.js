import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';
const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'why',
      age: 18,
      height: 1.88,
      books: [
        { name: '必修一', price: 100, count: 2 },
        { name: '必修二', price: 200, count: 3 },
        { name: '必修三', price: 300, count: 3 },
        { name: '必修四', price: 400, count: 3 },
      ],
      discount: 0.6,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // payload->{n: 10,name: 'why',age: 18,}

    // 字面量增强语法[INCREMENT_N]
    [INCREMENT_N](state, payload) {
      console.log(payload);

      state.counter += payload.n;
    },
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price;
      }
      return totalPrice * getters.currentDiscount;
    },
    currentDiscount(state) {
      return state.discount * 0.5;
    },
    totalPriceCountGreaterN(state, getters) {
      // 将来totalPriceCountGreaterN返回值是一个函数
      return function (n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price;
          }
        }
        return totalPrice * getters.currentDiscount;
      };
    },
    nameInfo(state) {
      return `name:${state.name}`;
    },
    ageInfo(state) {
      return `age:${state.age}`;
    },
    heightInfo(state) {
      return `height:${state.height}`;
    },
  },
});
export default store;
