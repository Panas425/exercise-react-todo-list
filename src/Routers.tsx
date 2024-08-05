import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './components/HomePage';
import {ListInput} from './components/ListInput';
import {About} from './components/About';
import { IToDo } from './Interfaces';
import { EditInput } from './components/EditInput';

export const Routers: React.FC = () => {
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



    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage todos={todos} onRemove={handleRemoveTodo} onMove={handleMove} sortByAuthor={sortByAuthor} sortByDate={sortByDate}/>} />
                <Route path="/listinput" element={<ListInput onAdd={handleAddTodo} />} />
                <Route path="/editinput" element={<EditInput onEdit={handleEditTodo} />} />
                <Route path="/About" element={<About todoCount={todos.length} />} />
            </Routes>
        </Router>
    );
};