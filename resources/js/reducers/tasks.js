import { TOGGLETASK } from '../actions'
import task from './task'
export default (state = [], action) => {
    switch (action.type) {
        case TOGGLETASK:
            return state.map(p =>
                p.id === action.id ?
                    task(p, action) :
                    p
            );


        default:
            return state;
    }
};