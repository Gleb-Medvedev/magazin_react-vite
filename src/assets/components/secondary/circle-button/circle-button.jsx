// import './circle-button.css';
import { children } from 'react';

export function CircleButton ({ children, className, title, onClick }) {
    return (
        <button className={`circle-button ${className}`} title={title} onClick={onClick} style={{borderRadius: '50%'}}>
            {children}
        </button>
    )
}