import React from 'react';
import './NeonButton.sass';

export default function NeonButton() {
    return (
        <button className="add-neon">
            <span className="button-line button-line-top"></span>
            <span className="button-line button-line-right"></span>
            <span className="button-line button-line-bottom"></span>
            <span className="button-line button-line-left"></span>
                    Add New Project
        </button>
    )
}
