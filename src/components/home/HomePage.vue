<template>
  <div class="home">
    <div>
      <img
        class="robot"
        src="../../assets/robot-home.png"
        alt=""
        aria-hidden="true"
      />
      <div get-started>
        <router-link to='/build'>Get started</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
