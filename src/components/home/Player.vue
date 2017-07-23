<template>
  <div class="player">
    <div v-if="currentView === 'complete'">
      <p><img src="../../assets/icn/book.png" width="49" height="33" alt="ブックアイコン"></p>
      <p><img src="../../assets/txt/done.png" width="134" height="14" alt="準備が完了しました"></p>
      <a href="javascript:void(0);" @click="movePlay">再生する</a>
    </div>
    <div v-else-if="currentView === 'play'">
      <div id="black-overlay" @click="historyBack"></div>
      <div id="frame-playlist-base">
        <a href="javascript:void(0);" @click="historyBack"><img src="../../assets/btn/close.png" width="71" height="17" alt="閉じる"></a>
        <ul id="frame-playlist">
          <li v-for="(frame, index) in viewableFrames" :key="index">
            <img v-if="frame !== 'opacity'" :src="frame" :alt="frame" :style="{ width: widths[index] + 'px' }">
            <img v-else src="../../assets/dummy/opacity.png">
          </li>
        </ul>
        <img src="../../assets/txt/sound-on.png" width="292" height="20" alt="サウンドをオンにしてお楽しみください">
      </div>
    </div>
    <div v-else>
    <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" width="87px" height="115px" viewBox="0 0 87 115" enable-background="new 0 0 87 115" xml:space="preserve">
      <g>
        <g class="icn-book">
          <path fill="#333333" d="M42.601,82.849c-0.486,0.478-0.59,1.224-0.249,1.815c0.155,0.271,0.39,0.468,0.656,0.596l0.293-0.289
            c3.729-3.668,6.658-4.688,11.879-4.688s8.15,1.02,11.879,4.688l0.297,0.292c0.272-0.132,0.51-0.338,0.664-0.616
            c0.127-0.229,0.189-0.479,0.189-0.729c0-0.393-0.154-0.779-0.449-1.069c-3.916-3.853-7.095-4.976-12.58-4.976
            C49.695,77.873,46.518,78.996,42.601,82.849z"/>
          <polygon fill="#333333" points="68.209,83.688 66.209,83.688 66.209,110.584 68.209,111.016"/>
          <rect x="42.151" y="83.688" fill="#333333" width="1.954" height="22.979"/>
          <path fill="#333333" d="M19.497,82.849c-0.486,0.478-0.59,1.224-0.249,1.815c0.155,0.271,0.39,0.468,0.656,0.596l0.294-0.289
            c3.729-3.668,6.658-4.688,11.879-4.688s7.149,1.02,10.878,4.688l0.297,0.292c0.272-0.132,0.51-0.338,0.664-0.616
            c0.127-0.229,0.189-0.479,0.189-0.729c0-0.393-0.154-0.779-0.449-1.069c-3.916-3.853-6.095-4.976-11.579-4.976
            C26.592,77.873,23.414,78.996,19.497,82.849z"/>
          <path fill="#333333" d="M67.76,105.849c-3.916-3.853-7.095-4.976-12.58-4.976c-5.235,0-8.371,1.029-12.051,4.473
            c-3.681-3.443-5.816-4.473-11.052-4.473c-5.485,0-8.663,1.123-12.58,4.976c-0.486,0.478-0.59,1.224-0.249,1.815
            c0.155,0.271,0.39,0.468,0.656,0.596l0.294-0.289c3.729-3.668,6.658-4.688,11.879-4.688c4.862,0,6.737,0.887,10.122,3.973
            c0.032,0.14,0.077,0.279,0.152,0.408c0.155,0.271,0.39,0.468,0.656,0.596l0.121,0.003h0.123c0.272-0.132,0.51-0.338,0.664-0.616
            c0.07-0.127,0.116-0.26,0.147-0.396c3.382-3.08,6.257-3.967,11.116-3.967c5.221,0,8.15,1.02,11.879,4.688l0.297,0.292
            c0.272-0.132,0.51-0.338,0.664-0.616c0.127-0.229,0.189-0.479,0.189-0.729C68.209,106.525,68.055,106.139,67.76,105.849z"/>
          <rect x="42.128" y="83.688" fill="#333333" width="2" height="25.658"/>
          <polygon fill="#333333" points="21.048,83.688 19.048,83.688 19.048,110.969 21.048,110.584"/>
          <path fill="#333333" d="M20.198,111.971c3.729-3.668,6.658-4.688,11.879-4.688c4.862,0,6.737,0.887,10.122,3.973
            c0.032,0.14,0.077,0.279,0.152,0.408c0.155,0.271,0.39,0.468,0.656,0.596l0.121,0.003h0.123c0.272-0.132,0.51-0.338,0.664-0.616
            c0.07-0.127,0.116-0.26,0.147-0.396c3.382-3.08,6.257-3.967,11.116-3.967c5.221,0,8.15,1.02,11.879,4.688l0.961-0.324
            c0.127-0.229,0.189-0.479,0.189-0.729c0-0.393-0.154-0.779-0.449-1.069c-3.916-3.853-7.095-4.976-12.58-4.976
            c-5.235,0-8.371,1.029-12.051,4.473c-3.681-3.443-5.816-4.473-11.052-4.473c-5.485,0-8.663,1.123-12.58,4.976
            c-0.486,0.478-0.59,1.224-0.249,1.815"/>
        </g>
        <g class="icn-arrow">
            <line fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.801" y1="55.762" x2="42.801" y2="70.762"/>
            <line fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.801" y1="55.762" x2="35.73" y2="62.833"/>
            <line fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="42.801" y1="55.762" x2="49.873" y2="62.833"/>
        </g>

        <g class="icn-ballon">
          <path opacity="0.8" fill="none" stroke="#333333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M66.5,12c-10.355,0-18.75,6.713-18.75,15c0,3.246,1.301,6.241,3.489,8.695l-1.378,5.141l5.863-1.571
          C58.775,40.982,62.486,42,66.5,42c10.355,0,18.75-6.713,18.75-15S76.855,12,66.5,12z"/>
          <path opacity="0.5" fill="none" stroke="#333333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M20.5,3c10.354,0,18.75,6.713,18.75,15c0,3.246-1.302,6.241-3.49,8.695l1.378,5.141l-5.863-1.571C28.225,31.982,24.514,33,20.5,33
          C10.145,33,1.75,26.287,1.75,18S10.145,3,20.5,3z"/>
        </g>

        <g class="icn-circle">
          <circle opacity="0.8" fill="#333333" cx="42.801" cy="42.75" r="1.25"/>
          <circle opacity="0.7" fill="#333333" cx="42.801" cy="37.75" r="1.25"/>
          <circle opacity="0.5" fill="#333333" cx="42.801" cy="32.75" r="1.25"/>
        </g>
      </g>
      </svg>
      <p><img src="../../assets/txt/in-progress.png" width="152" height="14" alt="漫画を準備しています"></p>
      <p>※最大で3分かかります</p>
    </div>
  </div>
</template>

<script>
import path from 'path';

export default {
  name: 'player',
  data() {
    return {
      // 初期化時の状態（これによって、コンプリート画面への遷移の有無が決まる）
      stateCreated: null,
      // 現在発声中のコマ
      currFrame: null,
      // 現在発声中のvoiceのindex
      currVoiceIndex: null,
      // 再生画面の画像の幅
      widths: ['160px', '500px', '160px'],
    };
  },
  computed: {
    img() {
      return this.$store.getters.getImgById(this.$route.params.id);
    },
    canPlay() {
      if (this.img && typeof this.img !== 'undefined') {
        return (this.img.status === 'DONE');
      }
      return false;
    },
    processedImgs() {
      return this.$store.state.processedImgs;
    },
    voices() {
      return this.$store.state.voices;
    },
    // 現在表示中のビュー
    currentView() {
      if (this.canPlay && this.stateCreated === 'TODO') {
        return 'complete';
      } else if (this.canPlay) {
        return 'play';
      }
      return 'processing';
    },
    // 現在表示中の3コマ
    viewableFrames() {
      const imgs = this.processedImgs;
      const frames = [];
      frames.push((this.currFrame - 1 >= 0) ? imgs[this.currFrame - 1] : 'opacity');
      frames.push(imgs[this.currFrame]);
      frames.push((this.currFrame + 1 < imgs.length) ? imgs[this.currFrame + 1] : 'opacity');
      return frames;
    },
  },
  methods: {
    /**
     * statusがdoneになるまで1秒おきにstatusを確認する
     */
    checkCanPlay() {
      this.$store.dispatch('getImg', { id: this.$route.params.id });
      // ページ遷移しても動き続けてしまうので現在のrouteも確認する
      if (!this.canPlay && this.$route.name === 'Player') {
        setTimeout(this.checkCanPlay, 1000);
      }
    },
    /**
     * 再生画面に遷移する
     */
    movePlay() {
      this.stateCreated = 'done'; // これをtodoでなくせば再生画面に遷移する
    },
    playRoop() {
      if (this.currFrame < this.processedImgs.length - 1) {
        this.currVoiceIndex += 1;
        if (this.currFrame >= 0) {
          const url = new URL(this.voices[this.currVoiceIndex]);
          const filename = path.basename(url, path.extname(url));
          const currVoiceFrame = filename.split('-')[0];
          if (currVoiceFrame - 1 !== this.currFrame) {
            this.currFrame += 1;
          }
        } else {
          this.currFrame += 1;
        }
        const audio = new Audio(this.voices[this.currVoiceIndex]);
        audio.play();
        audio.addEventListener('ended', () => {
          this.playRoop();
        });
        this.$store.commit('setAudio', audio);
      }
    },
    /**
     * 再生関数
     */
    play() {
      const imgPromise = this.$store.dispatch('getProcessedImgs', {
        id: this.$route.params.id,
      });
      const voicePromise = this.$store.dispatch('getVoices', {
        id: this.$route.params.id,
      });
      Promise.all([imgPromise, voicePromise]).then(() => {
        this.currFrame = -1; // 1コマ目なら、この値は0になる（配列のインデックスなので）
        this.currVoiceIndex = -1; // 1つ目なら、この値は0になる（配列のインデックスなので）
        this.playRoop();
      });
    },
    /**
     * 1つ前の画面に戻る
     */
    historyBack() {
      this.$router.go(-1);
    },
  },
  // player外から遷移する時に呼ばれる
  created() {
    if (this.currentView === 'play') {
      this.play();
    }

    this.$store.dispatch('getImgs');
    const img = this.$store.getters.getImgById(this.$route.params.id);
    this.stateCreated = img ? img.status : 'TODO';
    this.checkCanPlay();
  },
  // player内で遷移する時に呼ばれる
  beforeRouteUpdate(to, from, next) {
    // 初期状態更新
    const img = this.$store.getters.getImgById(to.params.id);
    this.stateCreated = img ? img.status : 'TODO';
    // 監視
    this.checkCanPlay();
    next();
  },
  watch: {
    currentView(newView) {
      if (newView === 'play') {
        this.play();
      }
    },
  },
};
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

#frame-playlist {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  align-items: center;
  margin: 40px auto;
  list-style-type: none;
}

#frame-playlist li:first-child img, #frame-playlist li:nth-child(3) img { /* カレントじゃないコマ */
  max-width: 160px;
  height: auto;
}

#frame-playlist li:nth-child(2) img { /* カレントのコマ */
  max-width: 500px;
  height: auto;
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

.icn-book{
  fill-opacity: 0;
  -webkit-animation: book-display 5s 1s ease 1;
          animation: book-display 5s 1s ease 1;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

  @-webkit-keyframes book-display {
    0% {
      fill-opacity: 0;
    }
    100% {
      fill-opacity: 100;
    }
  }

.icn-arrow{
  stroke: #333;
  fill-opacity: 0;
  -webkit-animation: arrow-jump 1.5s 1s ease infinite;
          animation: arrow-jump 1.5s 1s ease infinite;
/*  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  -webkit-animation: arrow-display 2s 1.5s ease 1;
          animation: arrow-display 2s 1.5s ease 1; */
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

/*  @-webkit-keyframes arrow-display {
    0% {
      stroke-dashoffset: 2000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  } */

  @-webkit-keyframes arrow-jump {
    15% {-webkit-transform: translateY(-30%);}
    30% {-webkit-transform: translateY(0);}
    100% {-webkit-transform: translateY(0);}
  }

.icn-circle {
  fill-opacity: 0;
}

/* --
.icn-circle circle:first-child{
  -webkit-animation: circle-blink 0s 1s ease infinite;
          animation: circle-blink 0s 1s ease infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.icn-circle circle:nth-child(2){
  -webkit-animation: circle-blink 1s 1s ease infinite;
          animation: circle-blink 1s 1s ease infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.icn-circle circle:nth-child(3){
  -webkit-animation: circle-blink 2s 1s ease infinite;
          animation: circle-blink 2s 1s ease infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

  @-webkit-keyframes circle-blink {
    0% {
      fill-opacity: 0;
    }
    50% {
      fill-opacity: 1;
    }
    100% {
      fill-opacity: 0;
    }
  }
-- */

.icn-ballon {
  stroke: #333;
  stroke-width: .6;
  fill-opacity: 0;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
}

.icn-ballon path:first-child{
  -webkit-animation: ballon-blink 4s 2s ease infinite;
          animation: ballon-blink 4s 2s ease infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

.icn-ballon path:nth-child(2){
  -webkit-animation: ballon-blink 4s 4s ease infinite;
          animation: ballon-blink 4s 4s ease infinite;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
}

  @-webkit-keyframes ballon-blink {
    0% {
      stroke-dashoffset: 2000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
