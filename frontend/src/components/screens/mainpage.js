
import React from 'react'


//Components






const MainPage = () => {


    return (
        <>
            <div className="row">
                <div className="col m 6">
                    <h1 className="welcome" >Hello PlaceHolderName</h1>
                </div>
                <div className="col m 6">
                </div>
            </div>
            
            <div className="row">
                <div className="col s4 m4 firstCol" style={{marginLeft: "20px"}}>

                <div className="row">
                    <div className="col s6 m4 center">
                            <a class="waves-effect waves-light btn-large #424242 grey darken-3"><p className="buttonText"> New Transaction</p></a>            
                        </div>
                        <div className="col s6 m4 center">
                            <a class="waves-effect waves-light btn-large #424242 grey darken-3"><p className="buttonText">Transfer Funds</p></a>            
                        </div>
                        <div className="col s6 m4 center">
                            <a class="waves-effect waves-light btn-large #424242 grey darken-3"><p className="buttonText">New Account</p></a>
                        </div>
                    </div>

                    <div className="card darken-1">
                        <div className="card-content black-text cardedit">
                            <span className="card-title">Account 1</span>
                            <h4>123213 BTC</h4>
                        </div>
                        <div className="card-action">
                            <a href="#">Copy address</a>
                            <a href="#"><i className="material-icons right ">center_focus_strong</i></a>
                        </div>
                    </div>
                    <div className="card darken-1">
                        <div className="card-content black-text cardedit">
                            <span className="card-title">Account 2</span>
                            <h4>123213 BTC</h4>
                        </div>
                        <div className="card-action">
                            <a href="#">Copy address</a>
                            <a href="#"><i className="material-icons right ">center_focus_strong</i></a>
                            
                        </div>
                    </div>
                    <div className="card darken-1">
                        <div className="card-content black-text cardedit">
                            <span className="card-title">Account 3</span>
                            <h4>123213 BTC</h4>
                        </div>
                        <div className="card-action">
                            <a href="#">Copy address</a>
                            <a href="#"><i className="material-icons right ">center_focus_strong</i></a>
                            
                        </div>
                    </div>
                </div>

                <div className="col s4 m4" style={{marginTop:"40px"}}>
                <h4>Transaction History</h4>
                <div className="card darken-1 ">
                    <div className="card-content black-text cardedit green lighten-4">
                        <div className="row">
                            <div className="col sm 10">
                                <span className="card-title">Account 3</span>
                            </div>
                            <div className="col sm 2">
                                <span className="card-title right">12 BTC</span>
                            </div>
                            <h5>Jan 23 2020</h5>
                            <h5>From: kjh312h123ku21kj123</h5>

                        </div>
                    </div>
                </div>
                <div className="card darken-1 ">
                    <div className="card-content black-text cardedit red lighten-4">
                        <div className="row">
                            <div className="col sm 10">
                                <span className="card-title">Account 1</span>
                            </div>
                            <div className="col sm 2">
                                <span className="card-title right">1 BTC</span>
                            </div>
                            <h5>May 15 2020</h5>
                            <h5>From: 238497indskanh</h5>

                        </div>
                    </div>
                </div>
                <div className="card darken-1 ">
                    <div className="card-content black-text cardedit red lighten-4">
                        <div className="row">
                            <div className="col sm 10">
                                <span className="card-title">Account 2</span>
                            </div>
                            <div className="col sm 2">
                                <span className="card-title right">2 BTC</span>
                            </div>
                            <h5>Apr 4 2020</h5>
                            <h5>From: 21kh3kijdshkjawsdh</h5>

                        </div>
                    </div>
                </div>

                <div className="card darken-1 ">
                    <div className="card-content black-text cardedit green lighten-4">
                        <div className="row">
                            <div className="col sm 10">
                                <span className="card-title">Account 3</span>
                            </div>
                            <div className="col sm 2">
                                <span className="card-title right">9000 BTC</span>
                            </div>
                            <h5>Jan 3 2020</h5>
                            <h5>From: 123h12kinkdhai</h5>

                        </div>
                    </div>
                </div>

                </div>
                <div className="col s4 m4">
                    <div class="row">
                        <div class="col s12 m5">

                            <div class="card-panel right-card">
                                <h3>Portfolio </h3>
                                
                                <img className="pie" src="https://landing.moqups.com/img/content/charts-graphs/pie-donut-charts/simple-donut-chart/simple-donut-chart-800.png"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default MainPage