import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import './LeftMenu.sass';

Modal.setAppElement('#root');

export default function LeftMenu() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="left-menu">
            <div className="add-project">
                <button
                    className="add-neon"
                    onClick={() => setModalIsOpen(true)}>
                    <span className="button-line button-line-top"></span>
                    <span className="button-line button-line-right"></span>
                    <span className="button-line button-line-bottom"></span>
                    <span className="button-line button-line-left"></span>
                    Add New Project
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}>
                    <h1>Hello</h1>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </Modal>
            </div>
        </div>
    )
}

