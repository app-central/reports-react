import React, { useState } from 'react'

export default function Login(props) {
   

    if (!props.start) {
        return (
            <form onSubmit={() => { props.login() }} className="form-box">
                <label for="exampleInputPassword1">Password</label>

                <input class="form-control" type="password" onChange={(e) => props.handleSetPass(e.target.value)} />
                <br />
                <button class="btn btn-primary mb-2 show-rep-btn" > show reports</button>
            </form>
        )
    } else {
        return (
            <div>
                <button class="btn btn-primary mb-2" onClick={() => { props.logout() }}> Back</button>


            </div>
        )
    }
}
