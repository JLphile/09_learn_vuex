import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';
import axios from 'axios';
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
      banners: [],
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
    // 参数payload为数组格式
    addBannerData(state, payload) {
      state.banners = payload;
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
  actions: {
    // 放函数
    // 1.参数问题
    incrementAction(context, payload) {
      console.log(payload);

      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
    // decrementAction(context) {
    //   console.log(context);
    // },
    // 2.(context)其他属性的解构写法
    decrementAction({ commit, dispatch, state, rootGetters, rootState }) {
      commit('decrement');
    },
    getHomeMultidata(context) {
      // 返回Promise
      return new Promise((resolve, reject) => {
        axios
          .get('http://123.207.32.32:8000/home/multidata')
          .then((res) => {
            context.commit('addBannerData', res.data.data.banner.list);
            resolve('成功啦');
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
export default store;
