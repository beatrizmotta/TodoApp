import React from 'react'
import './Main.css'
import Header from './Header'
import Cover from './Cover'
import TaskInput from './TaskInput'
import List from './List'
import Task from './Task'


// App por inteiro


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: '',
            tasks: []
        }
        this.handleChangeOfTheme = this.handleChangeOfTheme.bind(this)
        this.handleTask = this.handleTask.bind(this)
        this.renderTasks = this.renderTasks.bind(this)
    }

    handleChangeOfTheme(theme) {
        this.setState({theme})
    }
    
    handleTask(task) {
        let joined = this.state.tasks.concat(task)
        this.setState({tasks: joined})
    }

    renderTasks() {
        if (this.state.tasks.length < 1) {
            return <List hidden></List>
        } else {
            return <List>
                {this.state.tasks.map((e, i) => <Task key={i}>{e}</Task>)}
            </List>
        }
    }

    render() {
        return(
            <div className={`app ${this.state.theme === 'light' ? 'dark' : 'light'}`}>
                <Cover theme={this.state.theme}/>
                <Header getThemeToMain={this.handleChangeOfTheme}/>
                <TaskInput theme={this.state.theme} getTaskToMain={this.handleTask}/>
                {this.renderTasks()}
            </div>
        )
    }
}

export default Main