import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props;

        let classNames = 'todo-list-item d-flex justify-content-between align-items-center'

        if (done) classNames += ' done';
        if (important) classNames += ' important';

        return (
            <span className={classNames}>
                <span
                    onClick={onToggleDone}
                    className="todo-list-item-label">
                    {label}
                </span>
                <div className='d-flex'>
                    <button
                        onClick={onToggleImportant}
                        type="button"
                        className="btn btn-info rounded">
                        Important
                    </button>
                    <button
                        onClick={onDeleted}
                        type="button"
                        className="btn btn-danger rounded">
                        Delete
                    </button>
                </div>
    </span>);
    };
}

