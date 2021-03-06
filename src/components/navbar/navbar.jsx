import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import "./navbar.scss";

const NavBar = ({ currentUser, hidden }) => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid p-0">
      <Link className="navbar-brand" to="/">
        <Logo />
      </Link>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/shop">
              Shop
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Pricing
            </Link>
          </li>

          {currentUser ? (
            <div
              className="nav-link option"
              onClick={() => {
                auth.signOut();
                console.log(currentUser);
              }}
            >
              Sign out
            </div>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          <CartIcon />
        </ul>
        {!hidden ? <CartDropdown /> : null}
      </div>
    </div>
  </nav>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(NavBar);
