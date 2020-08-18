import React, {Component} from 'react';
import Task from "./task";
import Modal from "./modal";

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: '',
            tasks: [
                { title: 'wake up', completed: false, },
                { title: 'eat', completed: false, },
                { title: 'work', completed: false, },
                { title: 'read', completed: false, },
                { title: 'training', completed: false, },
                { title: 'family time', completed: false, },
                { title: 'sleep', completed: false, },
            ],
            taskIdMemory: '',
            showModal: false,
        };
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    eventDone(index) {
        const {tasks} = this.state;
        tasks[index].completed = true;

        this.setState({
            tasks,
            showModal: false,
            taskIdMemory: '',
        });
    }

    addNewTask() {
        const {newTask, tasks} = this.state;

        if(newTask !== '') {
            tasks.push({title: newTask, completed: false});
        }
        this.setState({
            newTask: '',
            tasks
        });
    }

    inputChangeHandle(e) {
        this.setState({
            newTask: e.target.value,
        })
    }

    openModal(i) {
        this.setState({
            showModal: true,
            taskIdMemory: i,
        });
    }

    eventDecline() {
        this.setState({
            showModal: false,
            taskIdMemory: '',
        });
    }

    render() {
        const {tasks, newTask, showModal, taskIdMemory} = this.state;
        const taskList = tasks.map((task, i) => (
            <Task key={i} taskTitle={task.title} openModal={() => this.openModal(i)} completed={task.completed}/>
        ));
        return (
            <div>
                <Modal successClick={() => this.eventDone(taskIdMemory)} declineClick={() => this.eventDecline()} show={showModal}/>
                <input onChange={this.inputChangeHandle} value={newTask}/>
                <br/>
                <a href='#' onClick={this.addNewTask} className="btn success">Add New pls</a>
                {taskList}
            </div>
        )
    }
}

export default TasksList;