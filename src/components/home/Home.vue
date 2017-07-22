<template>
  <div id="app">
    <img src="../../assets/logo.svg" style="width:80%;height:80%;">
    <router-view></router-view>
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
</style>
