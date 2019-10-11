import React from 'react';
import NavbarContainer from "../navbar/navbar_container";
import FooterContainer from "../footer/footer_container";
    // ./footer/footer_container";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.username.focus();
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = Object.assign({}, { username: 'DemoUser', password: 'password123' })
    this.props.processForm(demo);
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
      <NavbarContainer myType={"login"} />
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

          <form className="formClass" onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <label className="log-labels">Username:<br></br>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                name="username"
                ref={(input) => { this.username = input; }}
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
            <form className="formClass" onSubmit={this.handleDemo}>
              <input className="login-submit" type="submit" value="Demo User" />
            </form>
        </div>
        {/* <div>  end of l-blue ------------------------------</div> */}
      </div>

      <FooterContainer myType={"login"} />
      </>
    );
  }
}

export default LoginForm;
