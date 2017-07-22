<template>
  <div id="app">
    <div id="main">
      <h1><img src="../../assets/logo-copy.png" width="313" height="146"></h1>
      <router-view></router-view>
    </div>
    <List/>
  </div>
</template>

<script>
import List from './List';

export default {
  name: 'home',
  components: {
    List,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

#main {
  width: 950px;
  margin: 0 auto;
  background: url('../../assets/bg/main-base.png') no-repeat center center;
  background-size: cover;
  padding: 40px 10px;
}

#app {

}

</style>
