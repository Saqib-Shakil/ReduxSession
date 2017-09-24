import { TOGGLETASK } from '../actions'

export default (state = {}, action) => {
    switch (action.type) {
        case TOGGLETASK:
            return {
                ...task,
                done: !task.done
            }
        default:
            return state;
    }
};