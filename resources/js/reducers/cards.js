import { EXPANDCARD, TOGGLETASK } from '../actions'
import card from './card'

export default (state = [], action) => {
    switch (action.type) {
        case EXPANDCARD:
        case TOGGLETASK:
            return state.map(p =>
                p.id === action.id ?
                    card(p, action) :
                    p
            );

        default:
            return state;

    }
};