<template>
  <div class="list">
    <h2><img src="../../assets/title/list.png" width="193" height="20" alt="最近聴かれた名場面"></h2>
    <ul>
      <li v-for="img in imgs" :key="img.id">
        <router-link :to="{name: 'Player', params: {id: img.id}}"><img :src="img.url" :alt="img.url"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list',
  computed: {
    /* アップロードされた画像のリスト */
    imgs() {
      return this.$store.state.imgs;
    },
  },
  created() {
    // 初期化時に画像リストを取得
    this.$store.dispatch('getImgs');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  margin-top: 20px;
}

h2 {
  background: url('../../assets/bg/title-base.png') no-repeat center center;
  background-size: 304px 58px;
  min-width: 304px;
  min-height: 58px;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

ul {
  list-style-type: none;
  padding: 0;
  height: 280px;
  background: rgba(255,255,255,0.8);
  -webkit-box-shadow: 0px 10px 10px 0px rgba(4,0,0,0.2);
  -moz-box-shadow: 0px 10px 10px 0px rgba(4,0,0,0.2);
  box-shadow: 0px 10px 10px 0px rgba(4,0,0,0.2);
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  overflow: auto;
  white-space: nowrap;
}

li {
  display: inline-block;
  margin: 40px 20px 30px;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

li img {
  height: 200px;
}
</style>
