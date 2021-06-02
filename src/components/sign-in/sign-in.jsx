import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onHandleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in m-5 col-6">
        <h2>I aleady have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onHandleChange}
            required
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onHandleChange}
            required
            label="Password"
          />

          <div className="d-flex justify-content-between">
            <CustomButton type="submit"> Sign in </CustomButton>

            <CustomButton isGoogleButton onClick={signInWithGoogle}>
              Google Sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
