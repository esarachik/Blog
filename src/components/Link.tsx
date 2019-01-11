import * as React from 'react'
import { MouseEvent, ReactNode } from 'react'

export interface LinkProps {
    active: boolean;
    onClick(e: MouseEvent<HTMLElement>): void;
    children?: ReactNode ;
}
const Link = (props: LinkProps) => (
  <button
    onClick={props.onClick}
    disabled={props.active}
    style={{
      marginLeft: '4px'
    }}
  >
    {props.children}
  </button>
)

export default Link