<template>
  <div id="app" class="main">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img src="./assets/build-a-bot-logo.png" alt="" class="logo" >
              Build a Bot
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    
  </div>
</template>

<script>
// import HomePage from './components/home/HomePage.vue';
// import RobotBuilder from './components/build/RobotBuilder.vue';

export default {
  name: 'App',
  components: {
    // RobotBuilder
  }
}
</script>

<style>
body{
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header{
  background-color: #999;
  width: 1048px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-link{
  text-decoration: none;
  color: inherit;
}

/* special clss provided by vue for route */
.router-link-active{
  color: white;
}

.active-link{
  color: white;
}
</style>
