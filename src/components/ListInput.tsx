import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IToDo } from '../Interfaces';
import { TextToDo } from './TextToDo';
import { AuthorToDo } from './AuthorToDo';

interface AddToDoPageProps {
    onAdd: (todo: IToDo) => void;
}

export const ListInput: React.FC<AddToDoPageProps> = ({ onAdd }) => {
    const [author, setAuthor] = useState<string>('');
    const [text, setText] = useState<string>('');
    const navigate = useNavigate();

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value);
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const newTodo: IToDo = {
            id: getUniqueID(),
            date: new Date().toLocaleString(),
            author,
            text,
        };
        onAdd(newTodo);
        navigate('/');
    };

    function getUniqueID(): string {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        const milliseconds = now.getMilliseconds();
        const randomNum = Math.floor(Math.random() * 1000000);
        return `${date} ${time}.${milliseconds}-${randomNum}`;
    }

    return (
        <div>
            <h1>Add New Todo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <AuthorToDo handleChange={handleAuthorChange} text={author}></AuthorToDo>
                </div>
                <div>
                    <TextToDo handleChange={handleTextChange} text={text}></TextToDo>
                </div>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};