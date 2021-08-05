import React from 'react'
import './Cover.css'
import bgdesktopdark from '../../assets/images/bg-desktop-dark.jpg'
import bgdesktoplight from '../../assets/images/bg-desktop-light.jpg'
import bgmobiledark from '../../assets/images/bg-mobile-dark.jpg'
import bgmobilelight from '../../assets/images/bg-mobile-light.jpg'

export default props =>
    <img className="backgroundImage" src={props.theme === 'light' ? bgdesktopdark : bgdesktoplight} alt="" />