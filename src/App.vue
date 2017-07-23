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

a {
	text-decoration: none;
	color: #333;
}

a:hover {
	opacity: 0.5;
	filter: alpha(opacity=80);
	-ms-filter: "alpha( opacity=80 )";
  transition: opacity .3s ease-out;
  -moz-transition: opacity .3s ease-out;
  -webkit-transition: opacity .3s ease-out;
  -o-transition: opacity .3s ease-out;
}

body {
  color: #333333;
  font-size: 12px;
  background: url('./assets/bg/bg.jpg') no-repeat;
  background-size: cover;
  margin: 0 0 40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}

.dz-message {
  display: none;
}

.vue-dropzone {
  border: none;
  color: #333;
}
</style>
