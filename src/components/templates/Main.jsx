import React from 'react'
import './Main.css'
import Header from './Header'
import Cover from './Cover'

// App por inteiro


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: ''
        }
        this.handleChangeOfTheme = this.handleChangeOfTheme.bind(this)
    }

    handleChangeOfTheme(theme) {
        console.log()
        this.setState({theme})
    }

    render() {
        return(
            <div className={`app ${this.state.theme === 'light' ? 'dark' : 'light'}`}>
                <Cover theme={this.state.theme}/>
                <Header getThemeToMain={this.handleChangeOfTheme}/>
            </div>
        )
    }
}

export default Main