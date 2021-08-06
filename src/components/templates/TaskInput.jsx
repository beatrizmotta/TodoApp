import React from 'react'
import './TaskInput.css'
import {toggleTheme} from '../../utils/utils'
import Checkmark from './Checkmark'

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
            <div className={`inputBox ${toggleTheme(this.props.theme)}`}>
                <Checkmark />
                <input onChange={(e) => this.handleInput(e)} onKeyPress={(e) => this.submitInput(e)} type="text" placeholder="Create a new todo..." className="taskInput" />
            </div>
        )
    }
}

export default TaskInput