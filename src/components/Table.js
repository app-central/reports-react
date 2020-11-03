import React from 'react';
import ReactLoading from 'react-loading';


export default function Table(props) {
    if (props.loading) {
        return(
            <div className="loading">
            <ReactLoading type={'spin'} color={"blue"} height={'80px'} width={'80px'} />
            </div>
        );
    }else if (props.start) {
        return (
            <div className="table-box">

                <table class="table">
                    <thead class="thead-light">
                        <tr >
                            <th className="ver-th blank-cell" > </th>
                            {
                                props.data.map((line, index) => {
                                    return (
                                        <th>{line.app} <span className="time"> {props.getDate(line.day, index)}</span>
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
                                            <td>{line.[event]}</td>
                                        )
                                    })
                                }
                            </tr>
                        );
                    })

                    }


                    {/* <tr>
                        <th className="ver-th"     >Pop Native</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.PaymentSheetView_appear_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >App Launch Native</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.app_launch_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >App Launch SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.app_launch_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th"  >Approve Native</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.approve_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Approve SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.approve_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Fail Native</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.fail_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Fail SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.fail_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Pop SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.pop_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Purchase Native</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.purchase_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th className="ver-th" >Purchase SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.purchase_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr className="bot-tr">
                        <th className="ver-th bot-tr" >First Launch</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.first_launch}</td>
                                )
                            })
                        }
                    </tr> */}

                </table>
            </div>
        )
    } else {
        return (
            <div>
            </div>)
    }
}
