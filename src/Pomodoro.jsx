import React, { useState, useEffect }  from 'react';


function Pomodoro(){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);

    const timerMinutes = minutes<10 ? `0${minutes}` : minutes ;
    const timerSeconds = seconds<10 ? `0${seconds}` : seconds ;
    
    useEffect(()=>{
        let interval = setInterval(()=>{
            clearInterval(interval)

            if(seconds === 0){
                if(minutes!==0){
                    setSeconds(59)
                    setMinutes((min)=>min-1)
                } else{
                    let minutes = displayMessage ? 24 : 4
                    let seconds = 59

                    setSeconds(seconds)
                    setMinutes(minutes)
                    setDisplayMessage(!displayMessage)
                }
            } else{
                setSeconds((sec)=>sec-1)
            }
        }, 1000)

    },[seconds])
    return(
        <div className='main-timer'>
            <div className='message'>
                {displayMessage && 
                <div>Break time. New Pomodoro starts in: </div>}
            </div>
            <div className='timer'>
              {timerMinutes}:{timerSeconds}
            </div>
        </div>
    )
}

export default Pomodoro;