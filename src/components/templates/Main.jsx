import React from 'react'
import './Main.css'
import Header from './Header'
import Cover from './Cover'
import TaskInput from './TaskInput'
import TasksContainer from './TasksContainer'

// App por inteiro


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: ''
        }
        this.handleChangeOfTheme = this.handleChangeOfTheme.bind(this)
        this.handleTask = this.handleTask.bind(this)
    }

    handleChangeOfTheme(theme) {
        this.setState({theme})
    }

    handleTask(task) {
        console.log(task)
    }

    render() {
        return(
            <div className={`app ${this.state.theme === 'light' ? 'dark' : 'light'}`}>
                <Cover theme={this.state.theme}/>
                <Header getThemeToMain={this.handleChangeOfTheme}/>
                <TaskInput theme={this.state.theme} getTaskToMain={this.handleTask}/>
                <TasksContainer theme={this.state.theme} />
            </div>
        )
    }
}

export default Main