import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'why',
      age: 18,
      height: 1.88,
      books: [
        { name: '必修一', price: 100, count: 3 },
        { name: '必修二', price: 200, count: 3 },
        { name: '必修三', price: 300, count: 3 },
        { name: '必修四', price: 400, count: 3 },
      ],
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price;
      }
      return totalPrice;
    },
  },
});
export default store;
