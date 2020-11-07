import React, { useState } from 'react'

export default function TimeSelection(props) {

    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    const handleFrom = (e) =>{
        let time = new Date(e.target.value).getTime() / 86400000
        props.handleFrom(time);
    }
    const handleTo = (e) =>{
        let time = new Date(e.target.value).getTime() / 86400000
        props.handleTo(time);
    }
    if (props.start && !props.loading ) {
    return (
        <div className="date-selction">
            <label for="start">From:</label>

            <input onChange={(e) =>{handleFrom(e)}} className="date" type="date" id="start" name="trip-start" min="2020-09-26" max={props.getToday()} />
            <label for="end">To:</label>

            <input onChange={(e) =>{handleTo(e)}} className="date" type="date" id="end" name="trip-start" min="2020-09-26" max={props.getToday()} />
            <button onClick={()=>{props.resetTimes()}} className="btn btn-primary">show all</button>
        </div>
    )
    }else{
        return(
            <div></div>
        )
    }
}
