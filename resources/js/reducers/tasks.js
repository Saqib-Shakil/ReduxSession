import { TOGGLETASK, ADDTASK } from '../actions'
import task from './task'
export default (state = [], action) => {
    switch (action.type) {
        case TOGGLETASK:
            return state.map(p =>
                p.id === action.taskId ?
                    task(p, action) :
                    p
            );

            
        case ADDTASK: {
            let max = 0;
            state.forEach(p => {
                max = max > p.id ? max : p.id
            })
            return [
                ...state,
                {
                    id: max + 1,
                    name: action.text,
                    done: false
                }
            ]
        }

        default:
            return state;
    }
};