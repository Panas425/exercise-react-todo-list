import React from 'react';

interface TextToDoProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export const TextToDo: React.FC<TextToDoProps> = ({handleChange, text}) => {
    return (
        <input
          id="todolist"
          name="todolist"
          onChange={handleChange}
          value={text}
          placeholder='ToDo'
        />
    );
  }