import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user){
      state.user = user;
    },
  },

  getters: {

  },

  actions: {
    /**commits the updates user mutation, that mutation 
     * just puts the user return from axios
     * store them in state
     */
    signIn({commit}){
      console.log('sign in')
      axios.post('/api/sign-in')
      .then(result => commit('updateCurrentUser', result.data))
      .catch(console.error);
    },
    addRobotToCart(){
      console.log('Users added robot to cart')
    }
  },
}