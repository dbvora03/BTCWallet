import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'
import { usercontext } from '../../context'

const Signin = () => {


    const {state, dispatch} = useContext(usercontext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const PostData = ()=> {
        fetch("/signin", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response=> response.json()).then(data=> {
                if(data.error) {
                    M.toast({html:data.error})
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))

                    dispatch({type:"USER", payload:data.user})
                    M.toast({html:"Logging you in!"})
                    history.push("/main")
                }


            }).catch(err=> {
                console.log(err)
            })
    }

    return(
        <div >
            <div class="row mycard auth-card">
                <h1>Sign up</h1>
                <div class="col s12 m5 auth-card ">
                    <div class="card-panel #424242 grey hoverable darken-3">
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} className="white-text hoverable" type="text" placeholder="Username"/>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="white-text hoverable" type="text" placeholder="Password"/>
                        <button onClick={()=> {PostData()}} className="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">Log in
                            <i className="material-icons right ">send</i>
                        </button>
                    </div>
                </div>
                <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
            </div>
        </div>
    )
}

export default Signin