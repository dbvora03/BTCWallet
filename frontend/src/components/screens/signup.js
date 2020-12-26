import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {

    return(
        <div >
            <div class="row mycard auth-card">
                <h1>Sign up</h1>
                <div class="col s12 m5 auth-card ">
                    <div class="card-panel #424242 grey hoverable darken-3">
                        <input className="white-text hoverable" type="text" placeholder="Username"/>
                        <input className="white-text hoverable" type="text" placeholder="Email"/>
                        <input className="white-text hoverable" type="text" placeholder="Password"/>
                        <input className="white-text hoverable" type="text" placeholder="Re-enter password"/>
                        <button className="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">Sign up
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
                <p>Already have an account? Sign in <Link to="/signin">here</Link></p>
            </div>
        </div>
    )
}

export default Signup