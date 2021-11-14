import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";


import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Singleitem from "./components/SingleItem/Singleitem";
import Register from "./components/Authentication/Register";
import Sigin from "./components/Authentication/Sigin";
import Logout from "./components/Authentication/Logout";
 
function App({current}) {
   
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/sigin" component={Sigin} />
          <Route exact path="/logout" component={Logout} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={Singleitem} />
          )}
         
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps=(state)=>{
  return{
    current: state.shop.currentItem,
  }
}

export default connect(mapStateToProps)(App);
