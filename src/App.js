import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';


import { BrowserRouter as Router , Switch , Route    } from 'react-router-dom'
 
function App() {
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