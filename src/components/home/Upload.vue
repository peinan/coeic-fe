<template>
  <div class="upload">
    <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
        <!-- Optional parameters if any! -->
        <input type="hidden" name="token" value="xxx">
    </dropzone>
  </div>
</template>

<script>
import Dropzone from 'vue2-dropzone';

export default {
  name: 'upload',
  components: {
    Dropzone,
  },
  methods: {
    showSuccess(file) {
      console.log('A file was successfully uploaded', file);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
