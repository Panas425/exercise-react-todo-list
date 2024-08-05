import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IToDo } from "../Interfaces";
import { List } from "./List";
import './HomePage.css'

interface HomePageProps {
    todos: IToDo[];
    onRemove: (id: string) => void;
    onMove: (id: string, direction: 'up' | 'down') => void;
    sortByAuthor: () => void;
    sortByDate: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ todos, onRemove, onMove, sortByAuthor, sortByDate }) => {
    const navigate = useNavigate();

    return (
        <div className='homepage-container'>
            <h1 className='toDo'>Todo List</h1>
            <List lists={todos} onRemove={onRemove} onMove={onMove} />
            <button onClick={() => navigate('/listinput')} className="btnNavigate">
                Add New Todo
            </button>
            <button onClick={() => navigate('/about')} className="btnNavigate">
                About
            </button>
            <button onClick={sortByAuthor}>Sort By Author</button>
            <button onClick={(sortByDate)}>Sort By Date</button>
        </div>
    );
};
