import React from 'react'

import { Route,Switch } from "react-router";
import "./App.css";

import HomePage  from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import NavBar  from "./components/navbar/navbar";
import Login  from "./pages/login/login";
import {auth} from "./firebase/firebase.utils";


class  App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({currentUser: user}));
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }



  render() {
    return (
      <div className = "container p-5">
        <NavBar currentUser = {this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={ShopPage}/>
        <Route  path="/login" component={Login}/>
        </Switch>
      </div>
    )
  }
}

export default App;
