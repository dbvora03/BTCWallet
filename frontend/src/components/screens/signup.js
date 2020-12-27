import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const [username,setUsername] = useState("")
    const [password,setpassword] = useState("")
    const [spassword,setspassword] = useState("")
    const [email,setemail] = useState("")
    const history = useHistory()

    const Upload = ()=> {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email"})
            return
        }

        if (spassword != password) {
            M.toast({html: "Passwords do not match"})
            return
        }

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username, 
                email,
                password
            })
        }).then(res=> res.json()).then(data=> {
            if(data.error) {
                M.toast({html:data.error})
            } else {
                M.toast({html:"You have been signed up! Check your email!"})
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
                        <input value={email} onChange={(e)=>setemail(e.target.value)} className="white-text hoverable" type="text" placeholder="Email"/>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} className="white-text hoverable" type="text" placeholder="Password"/>
                        <input value={spassword} onChange={(e)=>setspassword(e.target.value)}  className="white-text hoverable" type="text" placeholder="Re-enter password"/>
                        <button onClick={()=>Upload()} className="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">Sign up
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