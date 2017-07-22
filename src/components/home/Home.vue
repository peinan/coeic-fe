<template>
  <div class="home">
    <Upload/>
    <List/>
  </div>
</template>

<script>
import Upload from './Upload';
import List from './List';

export default {
  name: 'home',
  // data() {
  //   return {
  //     key: value,
  //   };
  // },
  components: {
    Upload,
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
