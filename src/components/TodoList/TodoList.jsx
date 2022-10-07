import React from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md';

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id.toString()} >
          <span
            className={['todo', todo.checked ? 'checked' : ''].join(' ')}
            onClick={() => onToggle && onToggle(todo)}
            onKeyPress={() => onToggle && onToggle(todo)}
            tabIndex={0}
            role="button">

            {todo.title}

          </span>
          <button
            aria-label="remove todo"
            type='button'
            className='remove'
            onClick={() => onRemove && onRemove(todo)}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  )
};

TodoList.protoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id:  PropTypes.number.isRequired,
      title:  PropTypes.string.isRequired,
      checked:  PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default TodoList;
