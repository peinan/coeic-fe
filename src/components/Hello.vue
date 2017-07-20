<template>
  <div class="hello">
    <h1>coεic</h1>
    <h2>Upload Comic</h2>
    <p>
      <button v-on:click="submit">Upload</button>
    </p>
    <h2>Uploaded Comic</h2>
    <ul>
      <li v-for="img in imgs" :key="img.id">
        <img :src="img.filename" :alt="img.filename">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hello',
  // data() {
  //   return {
  //     key: value,
  //   };
  // },
  computed: {
    /* アップロードされた画像のリスト */
    imgs() {
      return this.$store.state.imgs;
    },
  },
  methods: {
    /* 画像アップロードの実行。成功したら画像一覧を更新。 */
    submit() {
      axios.post('/api/uploaded-img', {})
      .then(() => {
        this.$store.dispatch('getImgs');
      });
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
