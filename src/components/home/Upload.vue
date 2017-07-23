<template>
  <div class="upload">
    <dropzone
      id="dropzone"
      url="http://104.155.222.216:5000/api/uploadedImg"
      acceptedFileTypes="image/*"
      :maxFileSizeInMB="100"
      :preview-template="template"
      @vdropzone-success="toPlayer"
    >
    </dropzone>
    <div class="status">
      <p><img src="../../assets/icn/upload.png" width="49" height="55" alt="アップロードアイコン"></p>
      <p><img src="../../assets/txt/drag-drop.png" width="179" height="14" alt="漫画をドラッグ＆ドロップ"></p>
      <p>または</p>
      <p><img src="../../assets/btn/file-select.png" width="140" height="40" alt="ファイルを選択"></p>
    </div>
  </div>
</template>

<script>
import Dropzone from 'vue2-dropzone';

export default {
  name: 'upload',

  data() {
    return {
      url: this.$config.API.UPLOADED_IMG,
    };
  },

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
     * プレイヤー画面に遷移する。
     * アップロード完了時に呼ぶ。
     */
    toPlayer(file) {
      this.$router.push({
        name: 'Player',
        params: { id: JSON.parse(file.xhr.response).result.id },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dropzone {
  width: 510px;
  height: 270px;
  margin: 40px auto 50px;
  background: none;
  z-index: 1;
  position: relative;
}

.status {
  width: 510px;
  height: 270px;
  background: url('../../assets/bg/upload-base.png') no-repeat 0 0;
  margin: 40px auto -280px;
  padding-top: 30px;
  position: relative;
  top: -320px;
  left: 5px;
  z-index: 0;
}

.status p:first-child {
  opacity: 0;
  -webkit-animation: upload-display 1s 0.2s ease 1;
          animation: upload-display 1s 0.2s ease 1;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.status p:nth-child(2) {
  opacity: 0;
  -webkit-animation: upload-display 1s 0.2s ease 1;
          animation: upload-display 1s 0.2s ease 1;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.status p:nth-child(3) {
  opacity: 0;
  -webkit-animation: upload-display 1.5s 1s ease 1;
          animation: upload-display 1.5s 1s ease 1;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.status p:nth-child(4) {
  opacity: 0;
  -webkit-animation: upload-display 1.5s 1.8s ease 1;
          animation: upload-display 1.5s 1.8s ease 1;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

  @-webkit-keyframes upload-display {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
