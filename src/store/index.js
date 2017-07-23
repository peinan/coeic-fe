import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // prod以外では厳格モードとする
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // アップロードされた画像リスト
    imgs: [],
    // 処理済画像のリスト
    processedImgs: [],
    // 音声のリスト
    voices: [],
    // 出力中のaudio
    audio: null,
  },
  mutations: {
    // 画像リストの全更新
    setImgs(state, imgs) {
      state.imgs = imgs;
    },
    // 画像の更新
    setImg(state, img) {
      const index = state.imgs.findIndex(img2 => img2.id.toString() === img.id.toString());
      if (index !== -1) {
        state.imgs.splice(index, 1, img);
      }
    },
    // 処理済画像の更新
    setProcessedImgs(state, imgs) {
      state.processedImgs = imgs;
    },
    // 処理済音声の更新
    setVoices(state, voices) {
      state.voices = voices;
    },
    // audio更新
    setAudio(state, audio) {
      state.audio = audio;
    },
    // audio停止
    pauseAudio(state) {
      if (state.audio !== null) {
        state.audio.pause();
      }
    },
  },
  getters: {
    getImgById: state => (id) => {
      if (Object.keys(state.imgs).length === 0) return null;
      return state.imgs.find(img => img.id.toString() === id.toString());
    },
  },
  actions: {
    // 画像リストの取得
    getImgs({ commit }) {
      axios.get(Vue.prototype.$config.API.UPLOADED_IMG)
      .then((res) => {
        commit('setImgs', res.data.result);
      });
    },
    // 画像の取得
    getImg({ commit }, payload) {
      axios.get(`${Vue.prototype.$config.API.UPLOADED_IMG}/${payload.id}`)
      .then((res) => {
        commit('setImg', res.data.result);
      });
    },
    // 処理済み画像の取得
    getProcessedImgs({ commit }, payload) {
      return new Promise((resolve) => {
        axios.get(`${Vue.prototype.$config.API.PROCESSED_IMG}/${payload.id}`)
        .then((res) => {
          commit('setProcessedImgs', res.data.result);
          resolve();
        });
      });
    },
    // 処理済み画像の取得
    getVoices({ commit }, payload) {
      return new Promise((resolve) => {
        axios.get(`${Vue.prototype.$config.API.VOICE}/${payload.id}`)
        .then((res) => {
          commit('setVoices', res.data.result);
          resolve();
        });
      });
    },

  },
});
