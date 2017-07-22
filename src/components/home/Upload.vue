<template>
  <div class="upload">
    <dropzone
      id="dropzone"
      url="/api/uploaded-img"
      acceptedFileTypes="image/*"
      :maxFileSizeInMB="100"
      :preview-template="template"
      @vdropzone-success="getImgs"
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

  methods: {
    /**
     * アップロード後のプレビュー画面
     */
    template() {
      return `
        <div class="dz-preview dz-file-preview">
          <div class="dz-image" style="width: 200px;height: 200px">
            <img data-dz-thumbnail />
          </div>
          <div class="dz-details">
            <div class="dz-size"><span data-dz-size></span></div>
            <div class="dz-filename"><span data-dz-name></span></div>
          </div>
          <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
          <div class="dz-error-message"><span data-dz-errormessage></span></div>
          <div class="dz-success-mark"><i class="fa fa-check"></i></div>
          <div class="dz-error-mark"><i class="fa fa-close"></i></div>
        </div>
      `;
    },

    /**
     * アップロード画像を全件取得する。
     * アップロード完了時に呼び、リストを更新する。
     */
    getImgs() {
      this.$store.dispatch('getImgs');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
