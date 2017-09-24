import { EXPANDCARD, TOGGLETASK } from '../actions'
import tasks from './tasks'
export default (state = {}, action) => {
    switch (action.type) {
        case EXPANDCARD:
            return {
                ...card,
                expanded: !card.expanded
            }

        case TOGGLETASK:
            return {
                ...card,
                tasks: tasks(state.tasks, action)
            }
        default:
            return state;
    }
};