import React, { ReactElement } from 'react';

interface TextToDoProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
}

export function TextToDo(props: TextToDoProps): ReactElement {
    return (
        <input
          id="todolist"
          name="todolist"
          onChange={props.handleChange}
          value={props.text}
          placeholder='ToDo'
        />
    );
  }