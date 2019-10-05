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
      <div className="l-box">
        
        <div className="l-top">
            <div className="wrapper-padlock">
              <h2 className="login-label">Log in</h2><img className="padlock" src={window.padlockURL} />
            </div>
            <div>
              <p className="small-bold">
                Not registered with us yet? <a href="http://" className="color-link">Sign up</a>
              </p>
            </div>
        </div>
        {/* <div>  end of l-top ------------------------------</div> */}

        <div className="l-bottom">

          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <label className="log-labels">Username:<br></br>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            
            <br />
            <label className="log-labels">Password:&nbsp;<br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />

          </form>


        </div>
        {/* <div>  end of l-bottom ------------------------------</div> */}
        <div className="l-blue">
        </div>

        {/* <div>  end of l-blue ------------------------------</div> */}
      </div>
    );
  }
}

export default LoginForm;
