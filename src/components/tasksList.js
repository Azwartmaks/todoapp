import React, {Component} from 'react';
import Task from "./task";

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
            ]
        };
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    eventDone(index) {
        const {tasks} = this.state;
        tasks[index].completed = true;

        this.setState({
            tasks
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

    render() {
        const {tasks, newTask} = this.state;
        const taskList = tasks.map((task, i) => (
            <Task key={i} taskTitle={task.title} doneClick={() => this.eventDone(i)} completed={task.completed}/>
        ));
        return (
            <div>
                <input onChange={this.inputChangeHandle} value={newTask}/>
                <a href='#' onClick={this.addNewTask}>Добавить новый</a>
                {taskList}
            </div>
        )
    }
}

export default TasksList;