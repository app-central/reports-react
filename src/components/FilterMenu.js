import React, { useState } from 'react'

var today = new Date();
export default function FilterMenu(props) {
    const [event, setEvent] = useState("")
    let x = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    console.log(x);
    const addEvent = (e) => {
        e.preventDefault();
        if (event === "" || event === "- - Choose Event - -") {

        } else {
            props.addEvent(event);

        }
    }

    const resetEvents = (e) => {
        e.preventDefault();
        props.resetEvents();
    }

    const clear = (e) => {
        e.preventDefault();
        props.clear();
    }
    if (props.start) {
        return (
            <div>
                <form class="form-inline">
                    <div class="input-group mb-3">

                        <select class=" custom-select" id="eventselect" onChange={(e) => { setEvent(e.target.value) }}>
                            <option selected>- - Choose Event - -</option>

                            {props.events.map((event) => {
                                return (

                                    <option value={event}>{event} </option>
                                )
                            })}
                        </select>
                        <div class="input-group-append">
                            <button class="input-group-text btn btn-secondary" for="eventselect" onClick={addEvent}>Add Event</button>

                        </div>
                        <button className="btn btn-secondary reset-button" onClick={resetEvents}>Reset</button>
                        <button className="btn btn-danger reset-button" onClick={clear}>Clear All</button>


                    </div>
                    {/* <label for="start">Start date:</label>

                    <input className="date" type="date" id="start" name="trip-start"
                        min="2020-09-26" max={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()} /> */}

                </form>

            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
