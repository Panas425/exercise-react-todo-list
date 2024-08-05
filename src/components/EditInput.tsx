import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextToDo } from './TextToDo';

interface EditToDoProps {
    onEdit: (id: string, text: string) => void;
}

export const EditInput: React.FC<EditToDoProps> = ({ onEdit }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = location.state as { id: string };

    const [text, setText] = useState<string>('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onEdit(id, text);
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Todo</h1>
            <form>
                <div>
                    <TextToDo handleChange={handleTextChange} text={text} />
                </div>
                <button onClick={handleSubmit}>Edit Todo</button>
            </form>
        </div>
    );
};
