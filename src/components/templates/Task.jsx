import React from 'react'
import './Task.css'
import Checkmark from './Checkmark'

export default props => 
    <div className="task">
        <Checkmark />
        <p>{props.children}</p>
        </div>