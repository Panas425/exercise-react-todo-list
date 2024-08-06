import { useState } from "react";
import { IToDo, IToDoContext } from "./Interfaces";
import { Outlet } from "react-router-dom";


export function App() {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const handleAddTodo = (todo: IToDo) => {
      setTodos(prevTodos => [...prevTodos, todo]);
  };

  const handleRemoveTodo = (id: string) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };
  const handleEditTodo = (id: string, newText: string) => {
      setTodos(prevTodos => 
          prevTodos.map(todo => 
              todo.id === id ? { ...todo, text: newText } : todo
          )
      );
  };
  const handleMove = (id: string, direction: 'up' | 'down') => {
      setTodos(prevTodos => {
          const index = prevTodos.findIndex(todo => todo.id === id);
          if (index === -1) return prevTodos;

          const itemToMove = prevTodos[index];
          const newList = [...prevTodos];
          newList.splice(index, 1);

          if (direction === 'up' && index > 0) {
              newList.splice(index - 1, 0, itemToMove);
          } else if (direction === 'down' && index < newList.length) {
              newList.splice(index + 1, 0, itemToMove);
          }

          return newList;
      });
  };
  const sortByAuthor = () => {
      setTodos(prevTodos => [...prevTodos].sort((a, b) => a.author.localeCompare(b.author)));
  };

  const sortByDate = () => {
      setTodos(prevTodos => [...prevTodos].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
  };

  const toDoContext: IToDoContext = {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleEditTodo,
    handleMove,
    sortByAuthor,
    sortByDate,
  };

  return (
    <> 
        <Outlet context={toDoContext} />
    </>
  );
}
