import { EXPANDCARD, TOGGLETASK } from '../actions'
import tasks from './tasks'

export default (state = {}, action) => {
    switch (action.type) {
        case EXPANDCARD:
            return {
                ...state,
                expanded: !state.expanded
            }

        case TOGGLETASK:
            return {
                ...state,
                tasks: tasks(state.tasks, action)
            }
        default:
            return state;
    }
};