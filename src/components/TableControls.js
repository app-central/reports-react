import React from 'react'
import DropDown from './DropDown'
import LimitTags from './LimitTags'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));
export default function TableControls(props) {
    const classes = useStyles();

    if (props.start && !props.loading) {
        if (props.head === "Events") {
            return (

                <div className="table-controls">
                    <h3>{props.head}</h3>
                    <div className={classes.root}> <Button variant="contained" onClick={props.setNextMoviesEvetns}>Next Movies</Button>
                        <Button variant="contained" onClick={props.resetEvents}>Default</Button>
                        <Button variant="contained" color="secondary" onClick={props.clearEvents}>Clear All</Button>
                        <Button variant="contained" color="primary" onClick={props.addAll}>Add All</Button>
                    </div>
                    <DropDown start={props.tart} loading={props.loading} removeEvent={props.removeEvent} addEvent={props.addEvent} events={props.events} displayedEvents={props.displayedEvents} events={props.events} />
                    {/* <div>
            <h3>prop.head</h3>
            <LimitTags 
             start={props.tart} 
             loading={props.loading} 
             removeEvent={props.removeEvent} 
             addEvent={props.addEvent} 
             events={props.events} 
             displayedEvents={props.displayedEvents} 
             events={props.events}
             />

            </div> */}
                </div>
            )
        } else {
            return (
                <div className="table-controls">
                    <h3>{props.head}</h3>
                    <div className={classes.root}>
                    <Button variant="contained" onClick={props.resetEvents}>Reset</Button>

                        <Button variant="contained" color="secondary" onClick={props.clearEvents}>Clear All</Button>
                        <Button variant="contained" color="primary" onClick={props.addAll}>Add All</Button>
                    </div>
                    <DropDown start={props.tart} loading={props.loading} removeEvent={props.removeEvent} addEvent={props.addEvent} events={props.events} displayedEvents={props.displayedEvents} events={props.events} />

                </div>
            )
        }
    } else {
        return (
            <div></div>
        );
    }

}
