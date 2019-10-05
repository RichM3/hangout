import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="top-login">
            <div className="login-top">
              <h2 className="login-label">Log in</h2><img className="padlock" src={window.padlockURL} />
            </div>
            <div>
              <p className="small-bold">
                Not registered with us yet? <a href="http://" className="color-link">Sign up</a>
              </p>
            </div>
          </div>
          <div className="bottom-login">
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:<br></br>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:&nbsp;<br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
