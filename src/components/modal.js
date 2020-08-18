import React from 'react';

export default function Modal(props) {
    let layoutDisplayClass = 'layout';
    let modalDisplayClass = 'modal';
    if (props.show) {
        layoutDisplayClass = 'layout show';
        modalDisplayClass = 'modal show';
    }
    return (
        <div>
            <div className={layoutDisplayClass}></div>
            <div className={modalDisplayClass}>
                <h4 className="modal-title">Are you sure in this action?</h4>
                <div className="modal-actions">
                    <button className="btn success" onClick={props.successClick}>Yes</button>
                    <button className="btn decline" onClick={props.declineClick}>NO</button>
                </div>
            </div>
        </div>
    )
}