
import React, { useState, useEffect, useContext } from 'react'

import { usercontext } from '../../context'
//Components
const MainPage = () => {

    const [acc , setacc] = useState([])
    const [tran , settran] = useState([])
    const {state, dispatch} = useContext(usercontext)

    useEffect(()=> {

        fetch("/mywallet", {
            headers: {
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json).then(result=> {
            setacc(result)
        })

        fetch("/alltrans", {
            headers: {
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json).then(result=> {
            settran(result)
        })



    }, [])

    const balance = (address) => {

        fetch("/balance", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization": "Bearer" + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                address:address
            })
        }).then(res=>res.json).then(result=> {
            return result
        })
    }

    return (
        <>
            <div className="row">
                <div className="col m 6">
                    <h1 className="welcome">Hello Dhruv</h1>
                </div>
                <div className="col m 6">
                </div>
            </div>
            
            <div className="row">
                <div className="col s4 m4 firstCol" style={{marginLeft: "20px"}}>

                <div className="row">
                    <div className="col s6 m4 center">
                            <a href="/transaction" class="waves-effect waves-light btn-large #424242 grey darken-3"><p className="buttonText"> New Transaction</p></a>            
                        </div>
                        <div className="col s6 m4 center">
                            <a  class="waves-effect waves-light btn-large #424242 grey darken-3"><p className="buttonText">New Account</p></a>
                        </div>
                    </div>

                    {
                        acc.map(item=> {
                            return(
                                <div className="card darken-1">
                                    <div className="card-content black-text cardedit">
                                        <span className="card-title">{item.nick}</span>
                                        <h4>{balance(item.address)}</h4>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">{item.address}</a>
                                        <a><i className="material-icons right">center_focus_strong</i></a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="col s4 m4" style={{marginTop:"40px"}}>
                <h4>Transaction History</h4>

                {
                    tran.map(item=> {
                        return (

                        <div className="card darken-1 ">
                            <div className="card-content black-text cardedit green lighten-4">
                                <div className="row">
                                    <div className="col sm 2">
                                        <span className="card-title right">{item.amount}</span>
                                    </div>
                                    <h5>{item.date}</h5>
                                    <h5>To: {item.reciever}</h5>
        
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <div className="col s4 m4">
                    <div class="row">
                        <div class="col s12 m5">

                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default MainPage