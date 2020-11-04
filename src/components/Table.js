import React, { useState } from 'react';
import ReactLoading from 'react-loading';


export default function Table(props) {

    const [sortEvents, setSortEvents] = useState(false)

    const handleSort = (line) => {
        props.sortAppEvents(line)
        setSortEvents(!sortEvents);
    }

    const handleSortByName = () =>{
        props.sortByName(); 
        setSortEvents(!sortEvents);
    }
    

    if (props.loading) {
        return (
            <div className="loading">
                <ReactLoading type={'spin'} color={"blue"} height={'80px'} width={'80px'} />
            </div>
        );
    } else if (props.start) {
        return (
            <div className="table-box">

                <table className="table">
                    <thead className="thead-light">
                        <tr >
                            <th className="ver-th blank-cell" > <button className="btn" onClick={() => { handleSortByName()}}>⌄</button> </th>
                            {
                                props.data.map((line, index) => {
                                    return (
                                        <th>{line.app}     <span className="time"> {props.getDate(line.day, index)} </span><button className="btn" onClick={() => { handleSort(line) }}>⌄</button>
                                        </th>
                                    )
                                })
                            }

                            <th></th>
                        </tr>
                    </thead>
                    {props.events.map((event) => {
                        return (
                            <tr>

                                <th className="ver-th"     ><span className="test">{props.changeName(event)}</span></th>
                                {
                                    props.data.map((line, index) => {
                                        return (
                                            <td>{line[event]}</td>
                                        )
                                    })
                                }
                            </tr>
                        );
                    })

                    }

                </table>

            </div>
        )
    } else {
        return (
            <div>
            </div>)
    }
}
