import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function Form() {
    const [text, setText] = useState("");
    let dispatch = useDispatch();


    function addTask(e) {
        e.preventDefault();
        dispatch(addTodo(text));
    }

    

  return (
    <div>
          <form onSubmit={addTask}>
              <input type="text" onChange={(e) => setText(e.target.value)} />
              <button>Add</button>
          </form>
    </div>
  )
}

export default Form