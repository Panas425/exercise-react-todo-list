export interface IToDo{
    id: string,
    date: string,
    author: string,
    text: string
}
export interface IToDoContext {
    todos: IToDo[],
    handleAddTodo: (todo: IToDo) => void,
    handleRemoveTodo: (id: string) => void,
    handleEditTodo: (id: string, text: string) => void,
    handleMove: (id: string, direction: 'up' | 'down') => void,
    sortByAuthor: () => void,
    sortByDate: () => void,
}