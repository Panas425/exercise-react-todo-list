import React from 'react';
import './List.css';
import { IToDo } from '../Interfaces';
import { useNavigate } from 'react-router-dom';

interface ToDoListProps {
    lists: IToDo[];
    onRemove: (id: string) => void;
    onMove: (id: string, direction: 'up' | 'down') => void;
}

export const List: React.FC<ToDoListProps> = ({ lists, onRemove, onMove }) => {
    const navigate = useNavigate();
    return (
        <div className="div-container">
            {lists.map((todo, index) => (
                <div key={todo.id} className="list-item">
                    <p>{todo.date}</p>
                    <p>Author: {todo.author}</p>
                    <p>{todo.text}</p>
                    <button onClick={() => onRemove(todo.id)}>Remove</button>
                    <button onClick={() => navigate('/editinput', { state: { id: todo.id } })}>Edit</button>
                    <button onClick={() => onMove(todo.id, 'up')} disabled={index === 0}>Move Up</button>
                    <button onClick={() => onMove(todo.id, 'down')} disabled={index === lists.length - 1}>Move Down</button>
                </div>
            ))}
        </div>
    );
};
