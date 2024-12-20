import './circle-button.css';
import { children } from 'react';

export function CircleButton ({ children, className, title, onClick, current }) {
    return (
        <button className={current ? `circle-button ${className} active` : `circle-button ${className}`} title={title} onClick={onClick} >
            {children}
        </button>
    )
}