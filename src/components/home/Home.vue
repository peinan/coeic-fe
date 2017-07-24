<template>
  <div id="app">
    <div id="main">
      <router-link :to="{name: 'Upload'}"><h1><img src="../../assets/logo.png" width="313" height="146" alt="ダイナミックに漫画を楽しむ。coeic（コエック）"></h1></router-link>
      <router-view></router-view>
      <p><router-link :to="{name: 'About'}"><img src="../../assets/icn/about.png" width="34" height="34" alt="coeicについて"></router-link></p>
      <p><img src="../../assets/txt/sound-on.png" width="292" height="20" alt="サウンドをオンにしてお楽しみください"></p>
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

#main {
  width: 950px;
  margin: 0 auto;
  background: url('../../assets/bg/main-base.png') no-repeat center center;
  background-size: cover;
  padding: 40px 10px;
}
</style>
