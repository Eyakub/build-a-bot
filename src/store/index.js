import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },

  // all changes must go throw mutations, cant direct to state
  mutations:{
    addRobotToCart(state, robot){
      state.cart.push(robot);
    }
  },

  getters: {
    cartSaleItems(state){
      return state.cart.filter(item => item.head.onSale);
    },
  }
})