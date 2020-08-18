import React from 'react';

export default function Task(props) {
    if (props.completed) {
        return false;
    }
    return (<div> {props.taskTitle} <a href="#" onClick={props.openModal}>Done</a> </div>)
}