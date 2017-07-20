import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // アップロードされた画像リスト
    imgs: [],
  },
  mutations: {
    // 画像リストの更新
    setImgs(state, imgs) {
      state.imgs = imgs;
    },
  },
  actions: {
    // 画像リストの取得
    getImgs({ commit }) {
      axios.get('/api/uploaded-img')
      .then((res) => {
        commit('setImgs', res.data);
      });
    },
  },
});
