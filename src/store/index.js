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
  },
  mutations: {
    // 画像リストの全更新
    setImgs(state, imgs) {
      state.imgs = imgs;
    },
    // 画像の更新
    setImg(state, img) {
      if (state.imgs.find(img2 => img2.id === img.id)) {
        state.imgs.splice(img.id - 1, 1, img);
      }
    },
  },
  getters: {
    getImgById: state => (id) => {
      if (Object.keys(state.imgs).length === 0) return null;
      return state.imgs.find(img => img.id === id);
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
  },
});
