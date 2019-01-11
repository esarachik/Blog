import * as React from 'react'
import { Todo } from './Todo'

export interface TodoListProps {
    todos: any[];
    toggleTodo(id: number): void;
}

const TodoList = (props: TodoListProps) => (
  <ul>
    {props.todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => props.toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList