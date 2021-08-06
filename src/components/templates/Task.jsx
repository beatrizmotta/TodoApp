import React from 'react'
import './Task.css'

export default props => 
    <div className="task">
        <div className="checkmark_outer">
            <div className="checkmark_inner"></div>
        </div>
        <p>{props.children}</p>
        </div>