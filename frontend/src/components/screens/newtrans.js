import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Transaction = () => {

    const history = useHistory()
    const [nick, newNick] = useState("")


    const sendReq = () => {

        fetch("/newAddy", {
            methos: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                nick: nick
            })
        }).then(res=> res.json()).then(data=> {

            if(data.error){
               M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"New account added",classes:"#43a047 green darken-1"})
                //Takes you to the feed right after
                history.push('/main')
            }
        }).catch(err=> {
            console.log(err)
        })
    }

    return (

        <div >
            <div class="row mycard auth-card">
                <h1>New account</h1>
                <div class="col s12 m5 auth-card ">
                    <div class="card-panel #424242 grey hoverable darken-3">
                        <input value={uraddy} onChange={(e)=>newNick(e.target.value)} className="white-text hoverable" type="text" placeholder="Nickname"/>
                        
                        <button className="btn waves-effect waves-light #757575 grey darken-1" type="submit" name="action">add
                            <i onClick={()=>sendReq()} className="material-icons right ">add</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )



}



export default Transaction