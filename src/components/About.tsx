import React, { ReactElement } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IToDoContext } from '../Interfaces';


export function About(): ReactElement {
    const { todos } = useOutletContext<IToDoContext>();
    return (
        <div>
            <h1>About This Todo List</h1>
            <p>This todo list application helps you keep track of your tasks. You can add new tasks, view your current tasks, and remove tasks when they're completed.</p>
            <p>Currently, you have {todos.length} {length === 1 ? 'task' : 'tasks'} in your list.</p>
        </div>
    );
};