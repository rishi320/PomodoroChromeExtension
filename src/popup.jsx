import React from 'react';
import { render } from 'react-dom';
import Pomodoro from './Pomodoro.jsx';
import './popup.css';

function Popup(){
    return(
        <div className='main'>
           <Pomodoro/>
        </div>
    )
}

render(<Popup/>, document.getElementById("react-target"));

