import React from 'react';
import TodoListItem from '../todo-list-item';
import './TodoList.css';

const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const array = todos.map((item) => {
        const {id, ...itemProps} = item; // деструктурируем item
        return (
            <li key={id} className="list-group-item rounded mt-3 border-2">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {array}
        </ul>
    );
}

export default TodoList;