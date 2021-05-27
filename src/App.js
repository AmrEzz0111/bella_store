import { Route,Switch } from "react-router";
import "./App.css";

import HomePage  from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop_page";
import NavBar  from "./components/navbar/navbar";
import Login  from "./pages/login/login";


function App() {
  return (
    <div className = "container p-5">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/shop" component={ShopPage}/>
      <Route  path="/login" component={Login}/>
      </Switch>
    </div>
  )
}

export default App;
