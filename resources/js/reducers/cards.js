export default (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE':
        case 'TASK_TOGGLE':
            return state.map(p =>
                p.id === action.id ?
                    card(p, action) :
                    p
            );

        default:
            return state;
    }
};

export let card = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...card,
                expanded: !card.expanded
            }

        case 'TASK_TOGGLE':
            return {
                ...card,
                tasks: card.tasks.map(task =>
                    task.id === action.taskId ?
                        {
                            ...task,
                            done: !task.done
                        } : task)
            }
        default:
            return state;
    }
};