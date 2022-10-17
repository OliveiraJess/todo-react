import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newTodo.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewTodo({ onNewTodo }) {
  const [value, setValue] = useState('');

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue('');
  }

  // const notify = () => {
  //   toast.error("Você precisa inserir uma tarefa.")
  // };


  const notify = () => {
    toast.warn("Você precisa inserir uma tarefa.", {
      theme: 'colored'
    });
  };

  const submit = () => {
    if (value === null || value === "") {
      notify();
    } else if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  }

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();

    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <>
      <input className='new-todo'
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <ToastContainer />
    </>
  )
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo
