import React from 'react'
import './List.css'

export default props =>
    <div className="list">
        {props.hidden ? '' : props.children}
    </div>