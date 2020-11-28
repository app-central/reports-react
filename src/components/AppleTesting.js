import React from 'react'

export default function AppleTesting(props) {
    if (props.start && !props.loading && props.appleData) {
        return (
            <div>
                {props.appleData.map((line, index) => {

                    if (index === 0) {
                        return (
                            <tr>
                                {line.map((item) => {
                                    return (
                                        <th>{item}</th>
                                    )
                                })}
                            </tr>
                        );
                    } else {
                        return (
                            <tr>
                                {line.map((item) => {
                                    return (
                                        <td>{item}</td>
                                    )
                                })}
                            </tr>
                        );

                    }
                })}
            </div>
        )
    } else {
        return (
            <div> {props.idmap["3F"]}</div>
        )
    }

}
