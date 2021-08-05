import React from 'react'
import './TaskInput.css'
import {toggle} from '../../utils/utils'

class TaskInput extends React.Component {
    render() {
        return(
            <div className={`inputBox ${toggle(this.props.theme)}`}>
                <div className="checkmark_outer"><div className={`checkmark_inner ${toggle(this.props.theme)}`}></div></div>
                <input type="text" placeholder="Create a new todo..." className="taskInput" />
            </div>
        )
    }
}

export default TaskInput