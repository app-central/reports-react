import React from 'react'

export default function FacebookTest(props) {
    if (props.facebookData) {
        return (
            <div>
                {/* {props.facebookData.map((obj) => {
                    return (
                        <div>{obj}</div>
                    )
                })} */}
            </div>
        )
    } else {
        return (
            <div >
                facebookData ERROR!
            </div>
        )
    }
}
