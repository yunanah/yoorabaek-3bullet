import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../stores';
import { decrement, increment } from '../../stores/Todo/todoSlice';

function TodoList() {
  const todo = useSelector((state: RootState) => state.todoReducer.value);
  const dispatch = useDispatch();
  return <>P</>;
}

export default TodoList;
