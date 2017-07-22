<template>
  <div class="player">
    <div v-if="canPlay">
      can play!!!
    </div>
    <div v-else>
      loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  computed: {
    canPlay() {
      return (this.$store.state.status !== 'done');
    },
  },
  methods: {
    /**
     * statusがdoneになるまで1秒おきにstatusを確認する
     */
    checkCanPlay() {
      this.$store.dispatch('getStatus', { id: this.$route.params.id });
      console.log(this.$store.state.status);
      if (!this.canPlay) {
        setTimeout(this.checkCanPlay, 1000);
      }
    },
  },
  created() {
    this.checkCanPlay();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
