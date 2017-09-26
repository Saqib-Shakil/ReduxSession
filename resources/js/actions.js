import { ajax } from 'jquery'
export const TOGGLETASK = 'TOGGLECARD'
export const EXPANDCARD = 'EXPANDCARD'
export const ADDTASK = 'ADDTASK'
export const LOADCARDS = 'LOADCARDS'
export const LOADTASKS = 'LOADTASKS'
export const LOADEDCARDS = 'LOADEDCARDS'


export let triggerLoadCards = () =>
    ({ type: LOADCARDS })
export let triggerLoadTasks = (cardId) =>
    ({ type: LOADTASKS, cardId })
export let triggerLoadedCards = (cards) =>
    ({
        type: LOADEDCARDS,
        cards
    })

export let loadCards = () => (dispatch) => {
    dispatch(triggerLoadCards());
    ajax({
        url: '/api/cards',
        success: (cards) => {
            dispatch(triggerLoadedCards(cards))
        }
    })
}
/*
function loadCards(){
    return function(dispatch){

    }
}*/
export let expandCard = (cardId) => ({ type: EXPANDCARD, cardId })
export let addTask = (cardId, text) => ({ type: ADDTASK, cardId, text })
export let toggleTask = (cardId, taskId) => ({ type: TOGGLETASK, cardId, taskId })