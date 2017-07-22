<template>
  <div class="upload">
    <dropzone
      id="dropzone"
      url="/api/uploaded-img"
      :maxFileSizeInMB="100"
      acceptedFileTypes="image/*"
    >
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
