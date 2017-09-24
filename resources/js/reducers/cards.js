export default (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE':
            return state.map(card =>
                card.id === action.id ?
                    {
                        ...card,
                        expanded: !card.expanded
                    } : card
            );

        case 'TASK_TOGGLE':
            return state.map(card =>
                card.id === action.id ?
                    {
                        ...card,
                        tasks: card.tasks.map(task =>
                            task.id === action.taskId ?
                                {
                                    ...task,
                                    done: !task.done
                                } : task)
                    } : card
            )

        default:
            return state;
    }
};
