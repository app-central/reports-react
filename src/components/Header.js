import { Button } from '@material-ui/core'
import React from 'react'


export default function Header(props) {
    if (props.start && !props.loading) {
        return (
            <div className="header">
                <div className="row ">
                    <div className="col-4"></div>
                    <div className="col-4"><h1 onClick={() => { props.logout() }}> Reports</h1></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="header">
                <h1 onClick={() => { props.logout() }}> Reports</h1>
            </div>
        )
    }

}
