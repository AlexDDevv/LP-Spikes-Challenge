import React from 'react';

export default function BtnPaid({ onClick, selected, content }) {
    return (
        <button 
            onClick={onClick} 
            className={`btn-paid ${selected ? 'selected' : ''}`}
            disabled={selected} 
        >
            {content}
        </button>
    );
}
