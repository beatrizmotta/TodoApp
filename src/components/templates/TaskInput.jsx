import React from 'react'
import './TaskInput.css'
import {toggle} from '../../utils/utils'

const initialState = {
    currentTask: ''
}


class TaskInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitInput = this.submitInput.bind(this)
    }

    handleInput(e) {
        let target = e.target
        this.setState({currentTask: target.value})
    }

    submitInput(e) {
        if (e.code === 'Enter') {
            e.target.value = initialState.currentTask
        } else {
            return
        }
        this.props.getTaskToMain(this.state.currentTask)
    }

    render() {
        return(
            <div className={`inputBox ${toggle(this.props.theme)}`}>
                <div className="checkmark_outer">
                    <div className={`checkmark_inner ${toggle(this.props.theme)}`}></div>
                </div>
                <input onChange={(e) => this.handleInput(e)} onKeyPress={(e) => this.submitInput(e)} type="text" placeholder="Create a new todo..." className="taskInput" />
            </div>
        )
    }
}

export default TaskInput