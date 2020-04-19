import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },

  // all changes must go throw mutations, cant direct to state
  mutations:{
    addRobotToCart(state, robot){
      state.cart.push(robot);
    },
    updateParts(state, parts){
      state.parts = parts;
    },
  },

  actions: {
    getParts({commit}){
      console.log('Getparts calling')
      axios.get('/api/parts')
      .then(result => commit ('updateParts', result.data))
      .catch(console.error);
    }
  },

  getters: {
    cartSaleItems(state){
      return state.cart.filter(item => item.head.onSale);
    },
  }
})