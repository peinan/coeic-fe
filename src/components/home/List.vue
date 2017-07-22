<template>
  <div class="list">
    <h2>Uploaded Comic</h2>
    <ul>
      <li v-for="img in imgs" :key="img.id">
        <img :src="img.filename" :alt="img.filename">
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
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
