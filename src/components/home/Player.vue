<template>
  <div class="player">
    <div v-if="canPlay && stateCreated === 'todo'">
      再生の準備ができました！
      <br>{{ $route.params.id }}
      <br><button @click="play">再生する</button>
    </div>
    <div v-else-if="canPlay">
      ここは再生画面！
      <br>{{ $route.params.id }}
    </div>
    <div v-else>
      再生の準備をしています...
      <br>{{ $route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  data() {
    return {
      // 初期化時の状態（これによって、コンプリート画面への遷移の有無が決まる）
      stateCreated: null,
    };
  },
  computed: {
    img() {
      return this.$store.getters.getImgById(this.$route.params.id);
    },
    canPlay() {
      if (this.img && typeof this.img !== 'undefined') {
        return (this.img.status === 'done');
      }
      return false;
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
    play() {
      console.log('play!');
      this.stateCreated = 'done'; // これをtodoでなくせば再生画面に遷移する
    },
  },
  // player外から遷移する時に呼ばれる
  created() {
    const img = this.$store.getters.getImgById(this.$route.params.id);
    this.stateCreated = img ? img.status : 'undefined';
    this.checkCanPlay();
  },
  // player内で遷移する時に呼ばれる
  beforeRouteUpdate(to, from, next) {
    // 初期状態更新
    const img = this.$store.getters.getImgById(to.params.id);
    this.stateCreated = img ? img.status : 'undefined';
    // 監視
    this.checkCanPlay();

    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
