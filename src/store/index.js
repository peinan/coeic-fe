import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  // prod以外では厳格モードとする
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // アップロードされた画像リスト
    imgs: {},
    // 再生可能かのステータス
    status: null,
  },
  mutations: {
    // 画像リストの全更新
    setImgs(state, imgs) {
      imgs.forEach((img) => {
        state.imgs[img.id] = img;
      });
    },
    // statusの更新
    setStatus(state, status) {
      state.status = status;
    },
  },
  actions: {
    // 画像リストの取得
    getImgs({ commit }) {
      axios.get(Vue.prototype.$config.API.UPLOADED_IMG)
      .then((res) => {
        commit('setImgs', res.data);
      });
    },
    // 画像のstatusを取得
    getStatus({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${Vue.prototype.$config.API.UPLOADED_IMG}/${payload.id}`)
        .then((res) => {
          commit('setStatus', res.data.status);
          resolve(res);
        }, (error) => {
          reject(error);
        });
      });
    },
  },
});
