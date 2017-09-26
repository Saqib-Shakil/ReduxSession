import {
    EXPANDCARD, TOGGLETASK, ADDTASK,
    LOADCARDS, LOADEDCARDS, LOADTASKS
} from '../actions'


export default (state = {}, action) => {
    switch (action.type) {

        case LOADCARDS:
            return {
                ...state,
                cardsLoading: true
            }

        case LOADEDCARDS:
            return {
                ...state,
                cardsLoading: false
            }
        case LOADTASKS:
            return {
                ...state,
                tasksLoadingForCard: action.cardId
            }
        default:
            return state;

    }
};