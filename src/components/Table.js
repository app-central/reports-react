import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import ArrowTooltips from './ArrowTooltips';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0f84e4'
        }
    }
});

export default function Table(props) {

    const [sortEvents, setSortEvents] = useState(false)
    const [highlight, setHighlight] = useState([])
    const [date, setDate] = useState()

    const highlightCheck = (index) => {
        for (let i = 0; i < highlight.length; i++) {

            if (highlight[i] === index) {
                return true
            }
        }
        return false;
    }
    const highlightRemove = (index) => {
        let newHiglight = [];
        for (let i = 0; i < highlight.length; i++) {
            if (highlight[i] === index) {
                continue;
            }
            newHiglight = [...newHiglight, highlight[i]]
        }
        setHighlight(newHiglight)
    }
    const highlightAdd = (index) => {
        let newHiglight = [];
        highlight.forEach(element => {
            newHiglight = [...newHiglight, element]
        });
        newHiglight = [...newHiglight, index]
        setHighlight(newHiglight);

    }
    const handleSort = (line) => {
        props.sortAppEvents(line)
        setSortEvents(!sortEvents);
    }
    const handleSortByName = () => {
        props.sortByName();
        setSortEvents(!sortEvents);
    }

    if (props.loading) {
        return (
            <div className="loading">
                <ThemeProvider theme={theme}>

                    <CircularProgress size={80} color="primary" thickness={4} />
                    <p>{props.loadingStatus}</p>
                </ThemeProvider>
            </div>
        );
    } else if (props.data.length === 0) {
        return (
            <div>

            </div>
        )
    } else if (props.start) {
        let d = "";
        let dateIndxArr = [];
        return (
            <div>

                <div className="table-box">

                    <table className="table">
                        <thead className="thead-light">
                            <tr >
                                <th className="ver-th blank-cell" > <button className="btn" onClick={() => { handleSortByName() }}>⌄</button> </th>
                                {

                                    props.data.filter((app) => { return (app.day >= props.tFrom && app.day <= props.tTo) }).map((line, index) => {

                                        if (index === 0) {

                                        }
                                        if (!(d === line.day)) {
                                            dateIndxArr.push(index)
                                            d = line.day;

                                            return (
                                                <th className="dateStart" > <span className="time"> {props.getDate(line.day, index)} </span> {line.app}    <button className="btn" onClick={() => { handleSort(line) }}>⌄</button>
                                                </th>
                                            )
                                        } else {
                                            d = line.day;
                                            return (
                                                <th  >{line.app}    <button className="btn" onClick={() => { handleSort(line) }}>⌄</button>
                                                </th>
                                            )
                                        }

                                    }
                                    )
                                }

                                <th></th>
                            </tr>
                        </thead>
                        {props.events.map((event, index) => {
                            return (
                                <tr style={highlightCheck(index) === true ? { backgroundColor: "yellow", fontWeight: "bold" } : { backgroundColor: "white" }} onClick={() => { highlightCheck(index) === true ? highlightRemove(index) : highlightAdd(index) }} >

                                    <th onClick={() => { highlightCheck(index) === true ? highlightRemove(index) : highlightAdd(index) }} className="ver-th" style={highlightCheck(index) === true ? { backgroundColor: "yellow" } : { backgroundColor: "white" }}     >
                                        <span className="test">
                                            <ArrowTooltips name={event} newName={props.changeName(event)} />



                                        </span></th>
                                    {
                                        props.data.filter((app) => { return (app.day >= props.tFrom && app.day <= props.tTo) }).map((line, index) => {

                                            if (!(d === line.day)) {
                                                dateIndxArr.push(index)
                                                d = line.day;

                                                return (
                                                    <td className="dateStart" >{line[event] || "n/a"}</td>
                                                )
                                            } else {
                                                d = line.day;
                                                return (
                                                    <td   >{line[event] || "n/a"}</td>
                                                )
                                            }

                                        })
                                    }
                                </tr>
                            );
                        })

                        }

                    </table>


                </div>

            </div>
        )
    } else {
        return (
            <div>
                <CircularProgress height={'80px'} width={'80px'} />

            </div>)
    }
}
