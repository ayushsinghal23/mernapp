
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'


// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import AddItem from './components/AddItem';



function App() {

  const[sideToggle,setSideToggle]=useState(false);
  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
    <main>
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route exact path="/product/additem" component={AddItem}></Route>
        <Route exact path="/product/:id" component={ProductScreen}></Route>
        <Route exact path="/cart" component={CartScreen}></Route>
        {/* <Route exact path="/additem" component={AddItem}></Route> */}

      </Switch>
    </main>
    </Router>
  );
}

export default App;
