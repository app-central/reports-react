import React, { useState } from 'react'

export default function Login(props) {
    function leftFunction() {
        document.body.scrollLeft = 0; // For Safari
        document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
      }

    if (!props.start) {
        return (
            <form onSubmit={() => { props.login() }} className="form-box">
                <label for="exampleInputPassword1">Password</label>

                <input class="form-control" type="password" onChange={(e) => props.handleSetPass(e.target.value)} />
                <br />
                <button class="btn btn-primary mb-2" > show reports</button>
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
