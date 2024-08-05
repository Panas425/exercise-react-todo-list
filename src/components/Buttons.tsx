import React, { useState } from 'react';
import { IToDo } from '../Interfaces';
import { List } from './List';

export const Buttons: React.FC = () => {
    const [listOne, setListOne] = useState<IToDo[]>([]);
    const [listTwo, setListTwo] = useState<IToDo[]>([]);

    const handleRemove = (listSetter: React.Dispatch<React.SetStateAction<IToDo[]>>, id: string) => {
        listSetter(prevList => prevList.filter(todo => todo.id !== id));
    };

    const handleMove = (id: string, direction: 'up' | 'down') => {
        // Logic to move item between lists or within the same list
        if (direction === 'up') {
            const itemToMove = listTwo.find(todo => todo.id === id);
            if (itemToMove) {
                setListTwo(prevList => prevList.filter(todo => todo.id !== id));
                setListOne(prevList => [...prevList, itemToMove]);
            }
        } else {
            const itemToMove = listOne.find(todo => todo.id === id);
            if (itemToMove) {
                setListOne(prevList => prevList.filter(todo => todo.id !== id));
                setListTwo(prevList => [...prevList, itemToMove]);
            }
        }
    };

    return (
        <div className="todo-container">
            <div className="list-wrapper">
                <h2>List One</h2>
                <List
                    lists={listOne}
                    onRemove={(id) => handleRemove(setListOne, id)}
                    onMove={handleMove}
                />
            </div>
            <div className="list-wrapper">
                <h2>List Two</h2>
                <List
                    lists={listTwo}
                    onRemove={(id) => handleRemove(setListTwo, id)}
                    onMove={handleMove}
                />
            </div>
        </div>
    );
};