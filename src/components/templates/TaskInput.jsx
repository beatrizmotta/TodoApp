import React from 'react'
import './TaskInput.css'

class TaskInput extends React.Component {
    render() {
        return(
            <div className="inputBox">
                <input type="text" placeholder="Create a new todo..." className="taskInput" />
            </div>
        )
    }
}

export default TaskInput