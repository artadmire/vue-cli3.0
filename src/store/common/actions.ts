import { ActionTree, ActionContext } from 'vuex';
import TYPES from './types';

const actions: ActionTree<any, any> = {
    setName({ state, commit }: ActionContext<any, any>, name: string) {
        commit(TYPES.SET_NAME, name);
    },
    changeActive({ state, commit }: ActionContext<any, any>, avtive: string) {
        commit(TYPES.CHANGE_ACTIVE, avtive);
    },
    
};

export default actions;

