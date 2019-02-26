import Vue from 'vue';
import Vuex from 'vuex';
import COMMON_MODULE from './common';

Vue.use(Vuex);

interface State {
    COMMON_MODULE: any;
}

const store: any = new Vuex.Store<State>({
    modules: {
        COMMON_MODULE,
    }
});

export default store;
