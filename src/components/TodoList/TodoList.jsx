import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          // removeTodo={removeTodo}
          // toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
