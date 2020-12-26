//Css Files
import './App.css';

//Components
import Navbar from './components/navbar'
import Signin from './components/screens/signin'
import Signup from './components/screens/signup'
import About from './components/screens/about'
import MainPage from './components/screens/mainpage'

//Import other react related dependencies
import {BrowserRouter, Route} from 'react-router-dom'




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Route path="/signin"><Signin/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/dashboard"><MainPage/></Route>
    </BrowserRouter>
    </>
  )
}

export default App;
