import React from 'react';
import TodoItem from 'components/TodoItem/TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodoComplete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
