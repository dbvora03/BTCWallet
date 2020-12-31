import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useContext } from 'react'
import {usercontext} from '../context'

const Navbar = () => {
    const {state, dispatch} = useContext(usercontext)
    const history = useHistory()

    function renderList(){
        if(state) {
            <li style={{marginLeft: "10px"}}>
            <button onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push("/signin")
            }} className="btn waves-effect waves-light" type="submit" name="action">Log out</button>
        </li>
        }
    }


return (

    <div>
        <nav>
            <div class="nav-wrapper #424242 grey darken-3">
                <Link><a to={state? "/main": "/signin"} href="#" class="brand-logo" style={{marginLeft:"20px"}}>DripCoin</a></Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    </div>
)}

export default Navbar