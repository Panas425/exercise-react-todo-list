import { ReactElement } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { IToDoContext } from "../Interfaces";
import { List } from "./List";
import './HomePage.css'




export function HomePage(): ReactElement {
    const {todos, sortByAuthor, sortByDate} = useOutletContext<IToDoContext>();
    const navigate = useNavigate();

    return (
        <div className='homepage-container'>
            <h1 className='toDo'>Todo List</h1>
            <List lists={todos}/>
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
