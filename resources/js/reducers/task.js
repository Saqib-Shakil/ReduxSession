import { TOGGLETASK } from '../actions'

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLETASK:
            return {
                ...state,
                done: !state.done
            }
        default:
            return state;
    }
};