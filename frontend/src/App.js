//Css Files
import './App.css';

//Components
import Navbar from './components/navbar'
import Signin from './components/screens/signin'
import Signup from './components/screens/signup'
import About from './components/screens/about'
import MainPage from './components/screens/mainpage'
import Transaction from './components/screens/transaction'

//Import other react related dependencies
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import React from 'react'
import {useEffect, useContext, createContext, useReducer} from 'react'

//imports from other files
import {reducer, initialState} from './reducers/userReducer'
import {usercontext} from './context'

const RoutyBoi = () => {
  const hist = useHistory()
  const {state, dispatch} = useContext(usercontext)

  useEffect(()=> {
    
    const user = JSON.parse(localStorage.getItem("user"))


    if(user) {
      dispatch({type:"USER", payload:user})
      hist.push("/main")
    } else {
      hist.push()
    }

  },[])

  return(
    <Switch>
      <Route path="/signin"><Signin/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/main"><MainPage/></Route>
      <Route path="/transaction"><Transaction/></Route>
    </Switch>
  )


}




function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <usercontext.Provider value={{state, dispatch}}>
      <BrowserRouter>
          <Navbar/>
          <RoutyBoi/>
      </BrowserRouter>
    </usercontext.Provider>
    </>
  )
}

export default App;
