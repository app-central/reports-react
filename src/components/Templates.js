import React from 'react'
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
        // backgroundColor: '#430c58',
        // borderRadius: 3,
        // border: '1px',
        // borderColor: 'white',
        // color: 'white',
        // height: 48,
        margin: 10,
        // padding: '0 30px',
        // height: '40px',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // '&:hover': {
        //     backgroundColor: '#2e083d',
        //     color: '#FFF'
        // }
    },
    label: {
        textTransform: 'capitalize',
    },

}));

export default function Templates(props) {
    const classes = useStyles();

    const handleFbTemplate = () => {
        props.setFBEvents();
        props.setFBapps();
    }
    if (props.start && !props.loading) {
        return (
            <div className="templates">
                <h4>Templates</h4>
                <Button variant="contained" color="primary" onClick={() => { handleFbTemplate() }}
                    classes={{ root: classes.root, label: classes.label, }}
                >Facebook</Button>
                {/* <Button variant="contained" color="secondary" onClick={() => { handleFbTemplate() }}
                    classes={{ root: classes.root, label: classes.label, }}
                >Facebook</Button> */}
            </div>
        )
    } else {
        return (
            <div></div>

        )
    }

}
