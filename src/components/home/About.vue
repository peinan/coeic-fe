<template>
  <div class="player">
      <div id="black-overlay"></div>
      <div id="frame-playlist-base">
        <img src="../../assets/txt/about.png" width="361" height="344" alt="coeicとは、とは、漫画に楽しみを
プラスするサービスです。音声の読み上げ機能を搭載しており、今後、次のような機能を実装予定です。感情や場面に応じた音声の生成、話者の性別等による音声の分別、音声による操作（アップロードなど）対応">
      </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player {
  margin: 50px 0;
}

#play {
  display: inline-block;
  background: url('../../assets/icn/play.png') no-repeat left center / 35px 35px;
  margin: 15px 0 0 -20px;
  padding: 5px 0 0 40px;
  height: 35px;
  font-size: 14px;
}

#frame-playlist-base {
  position: absolute;
  top: 40px;
  width: 950px;
  margin: 0 auto;
  background: url('../../assets/bg/main-base.png') no-repeat center center;
  background-size: cover;
  padding: 30px 10px 40px;
  z-index: 4;
}
</style>
