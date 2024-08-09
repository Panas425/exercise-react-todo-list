import { ReactElement } from 'react';
import './List.css';
import { IToDo, IToDoContext } from '../Interfaces';
import { useNavigate, useOutletContext } from 'react-router-dom';




interface ToDoListProps {
    lists: IToDo[];
}

export function List(props: ToDoListProps): ReactElement {
    const {handleRemoveTodo, handleMove} = useOutletContext<IToDoContext>();
    const navigate = useNavigate();
    return (
        <div className="div-container">
            {props.lists.map((todo, index) => (
                <div key={todo.id} className="list-item">
                    <p>{todo.date}</p>
                    <p>Author: {todo.author}</p>
                    <p>{todo.text}</p>
                    <div className="buttons-list">
                    <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    <button onClick={() => navigate('/editinput', { state: { id: todo.id } })}>Edit</button>
                    <button onClick={() => handleMove(todo.id, 'up')} disabled={index === 0}>Move Up</button>
                    <button onClick={() => handleMove(todo.id, 'down')} disabled={index === props.lists.length - 1}>Move Down</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
