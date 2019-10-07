import React from 'react';
import NavbarContainer from "../navbar/navbar_container";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      {/* <FooterContainer myType={"login"} /> */}
      <NavbarContainer navType={"signUpForm"} />
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {/* <label className="sign-up-label">Sign up</label> */}
          {/* <h1 class="text--display3 align--center margin--bottom">
            Sign up
					</h1>         */}
          <h1 className="sign-up-label align--center margin--bottom">
            Sign up
					</h1>        
          {this.renderErrors()}
          <div className="signup-form">
            <br/>
            <label>Username:<br></br>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Email:<br></br>
              <input type="text"
                value={this.state.email }
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:&nbsp;<br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br/>
            <input className="signup-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    </>
    );
  }
}

export default SignupForm;
