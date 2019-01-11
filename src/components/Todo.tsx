import * as React from 'react'
import { MouseEvent } from 'react'

export interface TodoProps { 
    onClick(e: MouseEvent<HTMLElement>): void; 
    completed: boolean; 
    text: string; 
}

export const Todo = (props: TodoProps) =>
  <li
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none'
    }}
  >
    {props.text}
  </li>
