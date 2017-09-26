import { EXPANDCARD, TOGGLETASK, ADDTASK, LOADEDCARDS } from '../actions'
import card from './card'

export default (state = [], action) => {
    switch (action.type) {
        case EXPANDCARD:
        case TOGGLETASK:
        case ADDTASK:
            return state.map(p =>
                p.id === action.cardId ?
                    card(p, action) :
                    p
            );

        case LOADEDCARDS:
            return action.cards
            
        default:
            return state;

    }
};