import './circle-button.css';
import { Children } from 'react';

export function CircleButton ({ children, className, title, onClick }) {
    return (
        <button className={className ? `circle-button ${className}` : 'circle-button'} title={title} onClick={onClick}>
            {children}
        </button>
    )
}