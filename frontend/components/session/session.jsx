import React from 'react';

class SessionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  };

  handleDemo(event) {
    event.preventDefault();
    const demo = Object.assign({}, {
      email: 'demo@tetsy.com',
      password: '123456',
      username: 'demo1'
    });
    this.props.login(demo).then(this.props.closeModal());
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state); 
    this
      .props
      .processForm(user)
      .then(this.props.closeModal);
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    }
  }

  renderErrors() {
    return (
      <ul className="errors-ul">
        {this
          .props
          .errors
          .map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
      </ul>
    );
  }

  render() {

    const loginHeader = (
      <div className="login-header">
        <h1>Login to continue</h1>
      </div>
    );

    const registerHeader = (
      <div className="register-header">
        <h1>Create your account</h1>
      </div>
    );

    const header = this.props.formType === 'Register'
      ? registerHeader
      : loginHeader;

    const usernameInput = this.props.formType === 'Register'
      ? (
        <div className="login-form">
          <label htmlFor="username">
            Username
                        <span className="text-orange">*</span>
          </label>

          <input
            required
            type="text"
            value={this.state.fname}
            onChange={this.update('username')}
            className="login-input"
            id="username" />

          <br />
        </div>
      )
      : ('');

    return (
      <div className="session-form">
        <div className="errors">
          {this.renderErrors()}
        </div>
        <div className="login-form-container">

          <form onSubmit={this.handleSubmit} className="login-form-box">

            {header}

            <div className="login-form">
              <br />

              <label htmlFor="email">Email address
                                <span className="text-orange">*</span>
              </label>
              <input
                required
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                id="email" />

              <br /> {usernameInput}

              <label htmlFor="password">Password
                                <span className="text-orange">*</span>
              </label>
              <input
                required
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                id="password" />

              <br />

              <button className="clicky">{this.props.formType}</button>

            </div>
          </form>
          <button onClick={this.handleDemo} className="clicky" id="demo-login">Demo login</button>
        </div>

      </div>

    );
  }

}

export default SessionForm;