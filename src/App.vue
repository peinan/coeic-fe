<template>
  <home/>
</template>

<script>
import Home from '@/components/home/Home';

export default {
  name: 'app',
  components: { Home },
};
</script>

<style>
* {
-webkit-box-sizing: border-box;
-ms-box-sizing: border-box;
-moz-box-sizing: border-box;
-o-box-sizing: border-box;
box-sizing: border-box;
}

body {
  color: #333;
  background: url('./assets/bg/bg.jpg') no-repeat;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
