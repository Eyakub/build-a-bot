export default{
  created(){
    this.$store.dispatch('getParts');
  },
  computed: {
    parts(){
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      }; 
    }
  }
}