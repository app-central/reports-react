import React from 'react'
import DropDown from './DropDown'

export default function TableControls(props) {
    if (props.start && !props.loading ) {
        return (
            <div className="table-controls">
                <button className="btn btn-secondary reset-button" onClick={props.resetEvents}>Reset</button>
                <button className="btn btn-danger reset-button" onClick={props.clearEvents}>Clear All</button>
                <button className="btn btn-primary reset-button" onClick={props.addAll}>Add All</button>

                <DropDown start={props.tart} loading={props.loading} removeEvent={props.removeEvent} addEvent={props.addEvent} events={props.events} displayedEvents={props.displayedEvents} events={props.events} />
            </div>
        )
    } else {
        return(
            <div>

            </div>
        );
    }

}
