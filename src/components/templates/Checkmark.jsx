import React from 'react'
import { toggleCheckmark } from '../../utils/utils'
import checkmark from '../../assets/images/icon-check.svg'
import './Checkmark.css'


class Checkmark extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
        this.check = this.check.bind(this)
    }
    check() {
        this.setState({isChecked: this.state.isChecked == true ? false : true})
    }

    render() {
        return (
            <div onClick={this.check} className={`checkmark_outer ${toggleCheckmark(this.state.isChecked)}`}>
                <div className={`checkmark_inner ${toggleCheckmark(this.state.isChecked)}`}>
                    {this.state.isChecked ? <img src={checkmark}/> : ''}
                </div>
            </div>
        )
    }
}

export default Checkmark