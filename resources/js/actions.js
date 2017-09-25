export const TOGGLETASK = 'TOGGLECARD'
export const EXPANDCARD = 'EXPANDCARD'
export const ADDTASK = 'ADDTASK'
export let expandCard = (cardId) => ({ type: EXPANDCARD, cardId })
export let addTask = (cardId, text) => ({ type: ADDTASK, cardId, text })
export let toggleTask = (cardId, taskId) => ({ type: TOGGLETASK, cardId, taskId })