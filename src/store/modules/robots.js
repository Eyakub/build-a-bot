import axios from 'axios';

export default {
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
    },
    // params not clear
    addRobotToCart({commit, state}, robot){
      const cart = [...state.cart, robot];
      // return promise
      return axios.post('/api/cart', cart)
      .then(() => commit('addRobotToCart', robot));
    }
  },

  getters: {
    cartSaleItems(state){
      return state.cart.filter(item => item.head.onSale);
    },
  }
}