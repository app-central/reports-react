import React, { useState } from 'react'

export default function Login(props) {

    if (!props.start) {
        return (
            <div className="form-box">
                <label for="exampleInputPassword1">Password</label>

                <input class="form-control" type="password" onChange={(e) => props.handleSetPass(e.target.value)} />
                <br />
                <button class="btn btn-primary mb-2" onClick={() => { props.login() }}> show reports</button>
            </div>
        )
    } else {
        return (
            <div>
                <button class="btn btn-primary mb-2" onClick={() => { props.logout() }}> log out</button>

            </div>
        )
    }
}
