import React from 'react';

interface AboutPageProps {
    todoCount: number;
}

export const About: React.FC<AboutPageProps> = ({ todoCount }) => {
    return (
        <div>
            <h1>About This Todo List</h1>
            <p>This todo list application helps you keep track of your tasks. You can add new tasks, view your current tasks, and remove tasks when they're completed.</p>
            <p>Currently, you have {todoCount} {todoCount === 1 ? 'task' : 'tasks'} in your list.</p>
        </div>
    );
};