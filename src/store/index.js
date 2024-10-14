import Vue from 'vue';
import Vuex from 'vuex';
import { moduleAutoImport } from '@/utils';

const modulesFiles = require.context('./modules', true, /\.js$/);

// 模块自动引入
const modules = moduleAutoImport(modulesFiles);

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

export default store;
