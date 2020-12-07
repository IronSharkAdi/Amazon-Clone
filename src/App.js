import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { BrowserRouter as Router , Switch , Route    } from 'react-router-dom'
import Register from './pages/Register';
import { useEffect } from 'react';
import { auth, base } from './firebase';
import { useStateValue } from './StateProvider';
 
function App() {
    const [ {} , dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged(authUser =>{
          
          if(authUser){
            console.log("the user is " + authUser.uid )
            base.ref('users/' + authUser.uid).on('value' , (data)=>{
                const name = data.val().name
                dispatch({
                  type : 'SET_NAME',
                  name : name
                })
                console.log(name)
            })
              dispatch({
                type : 'SET_USER',
                user : authUser
              })

          } else {
            console.log("no user")
            dispatch({
              type : 'SET_USER',
              user : null
            })
          }
        })
    }, [])


  return (
    // Wrapping with Router and Switch so that we can visit many pages
    <Router>
    <div className="app">
                     {/* The header is outside the switch cause it has to be rendered in every page*/}
      <Switch> 
        {/* The login page link */}
        <Route path="/login">                 
          <Login/>
        </Route>

        {/* The Register page link */}
        <Route path="/register">                 
          <Register/>
        </Route>
      
        {/* The checkout page link */}
        <Route path="/checkout"> 
          <Header/>                  
          <Checkout/>
        </Route>



        {/* The home page link */}
        <Route path="/">
          <Header/>        
          <Home/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}
export default App;