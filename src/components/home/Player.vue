<template>
  <div class="player">
    <div v-if="canPlay && stateCreated === 'todo'">
      再生の準備ができました！
      <br>{{ $route.params.id }}
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
    canPlay() {
      return (this.$store.state.status === 'done');
    },
  },
  methods: {
    /**
     * statusがdoneになるまで1秒おきにstatusを確認する
     */
    checkCanPlay() {
      this.$store.dispatch('getStatus', { id: this.$route.params.id });
      // ページ遷移しても動き続けてしまうので現在のrouteも確認する
      if (!this.canPlay && this.$route.name === 'Player') {
        setTimeout(this.checkCanPlay, 1000);
      }
    },
  },
  // player外から遷移する時に呼ばれる
  created() {
    this.stateCreated = this.$store.state.status;
    this.checkCanPlay();
  },
  // player内で遷移する時に呼ばれる
  beforeRouteUpdate(to, from, next) {
    // 一旦loadingにする
    this.$store.commit('setStatus', null);
    // 遷移先の画像のstatusを取得
    this.$store.dispatch('getStatus', { id: to.params.id }).then(() => {
      // 初期状態更新
      this.stateCreated = this.$store.state.status;
      // 監視
      this.checkCanPlay();

      next();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
