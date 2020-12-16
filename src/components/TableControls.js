import React from 'react'
import DropDown from './DropDown'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root1: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: '#430c58',
        borderRadius: 3,
        border: '1px',
        borderColor: 'white',
        color: 'white',
        height: 48,
        padding: '0 30px',
        height: '40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover': {
            backgroundColor: '#2e083d',
            color: '#FFF'
        }
    },
    label: {
        textTransform: 'capitalize',
    },

}));

export default function TableControls(props) {
    const classes = useStyles();
    if (props.hide) {
        return (
            <div></div>
        )
    } else {
        if (props.start && !props.loading) {
            if (props.head === "Events") {
                return (

                    <div className="table-controls">
                        <h3>{props.head}</h3>
                        <div className={classes.root1}>
                            <Button variant="contained" onClick={() => { props.setUnityEvents() }}
                            // classes={{ root: classes.root, label: classes.label, }}
                            >Unity</Button>
                            {/* <Button variant="contained" onClick={() => { props.setFBEvents() }}
                            // classes={{ root: classes.root, label: classes.label, }}
                            >Facebook</Button> */}
                            <Button variant="contained" onClick={props.setNextMoviesEvetns}>Next Movies</Button>
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
                        <div className={classes.root1}>
                            {/* <Button variant="contained" onClick={() => { props.setFBapps() }}
                            // classes={{ root: classes.root, label: classes.label, }}
                            >Facebook</Button> */}
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
}
