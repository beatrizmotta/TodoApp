import React from 'react'
import './Header.css'
import Logo from './Logo'
import sunIcon from '../../assets/images/icon-sun.svg' 
import moonIcon from '../../assets/images/icon-moon.svg'

//Logo e botão que muda o tema
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'light'
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    toggle(currentTheme) {
        if (currentTheme === 'light') {
            return 'dark'
        } else if (currentTheme === 'dark') {
            return 'light'
        }
    }

    changeTheme() {
        //Muda o tema e passa a informação para o componente Main
        this.setState({theme: `${this.toggle(this.state.theme)}`})
        this.props.getThemeToMain(this.state.theme)
    }

    render() {
        return (
            <header className="header">
                <Logo />
                <img onClick={this.changeTheme} src={this.state.theme === 'light' ? moonIcon : sunIcon} alt="Botão para mudar o tema do site" />
            </header>
        )
    }
}

export default Header
