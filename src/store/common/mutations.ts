import TYPES from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
    [TYPES.SET_NAME](state, name) {
        state.name = name;
    },
    [TYPES.CHANGE_ACTIVE](state, active) {
        state.active = active;
    }
};

export default mutations;
