import React from 'react'

export default function Table(props) {
    if (props.start) {
        return (
            <div>

                <table class="table">
                    <tr>
                        <th></th>
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

                    <tr>
                        <th>PaymentSheetView_appear_NATIVE</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.PaymentSheetView_appear_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>app_launch_NATIVE</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.app_launch_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>app_launch_SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.app_launch_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>approve_NATIVE</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.approve_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>approve_SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.approve_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>fail_NATIVE</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.fail_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>fail_SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.fail_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>pop_SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.pop_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>purchase_NATIVE</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.purchase_NATIVE}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>purchase_SDK</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.purchase_SDK}</td>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>first_launch</th>
                        {
                            props.data.map((line, index) => {
                                return (
                                    <td>{line.first_launch}</td>
                                )
                            })
                        }
                    </tr>

                </table>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
