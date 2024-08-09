import React, { ReactElement, useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { TextToDo } from './TextToDo';
import { IToDoContext } from '../Interfaces';


export function EditInput(): ReactElement {
    const {handleEditTodo} = useOutletContext<IToDoContext>();
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state as { id: string };

    const [text, setText] = useState<string>('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleEditTodo(id, text);
        navigate('/');
    };

    return (
        <div className='input-container'>
            <h1>Edit Todo</h1>
            <form>
                <div>
                    <TextToDo handleChange={handleTextChange} text={text} />
                </div>
                <button className='add-button' onClick={handleSubmit}>Edit Todo</button>
            </form>
        </div>
    );
};
