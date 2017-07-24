<template>
  <div class="view">
      <div id="black-overlay" @click="historyBack"></div>
      <div id="about-base">
        <img src="../../assets/txt/about.png" width="361" height="344" alt="coeicとは、とは、漫画に楽しみを
プラスするサービスです。音声の読み上げ機能を搭載しており、今後、次のような機能を実装予定です。感情や場面に応じた音声の生成、話者の性別等による音声の分別、音声による操作（アップロードなど）対応">
        <p><br><br><a href="javascript:void(0);" @click="historyBack"><img src="../../assets/btn/close.png" width="71" height="17" alt="閉じる"></a></p>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 1つ前の画面に戻る
     */
    historyBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  margin: 50px 0;
}

#about-base {
  position: absolute;
  top: 40px;
  width: 950px;
  margin: 0 auto;
  background: url('../../assets/bg/main-base.png') no-repeat center center;
  background-size: cover;
  padding: 60px 10px 40px;
  z-index: 4;
}

#black-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 3;
}
</style>
