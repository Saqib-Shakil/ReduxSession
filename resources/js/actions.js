export const TOGGLETASK = 'TOGGLECARD'
export const EXPANDCARD = 'EXPANDCARD'
export const ADDTASK = 'ADDTASK'
export let expandCard = (id) => ({ type: EXPANDCARD, id })
export let addTask = (cardId, text) => ({ type: ADDTASK, id: cardId, text })