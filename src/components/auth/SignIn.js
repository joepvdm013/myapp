import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

handleChange = (e) =>{
  this.setState({
    [e.target.id]: e.target.value
  })
}

handleSubmit = (e) =>{
  e.preventDefault();
  this.props.signIn(this.state);
}

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/'/>

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-4">Sign In</h5>
          <div className="input-field">
            <label className="grey-text text-darken-1" htmlFor="email">E-mail</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label className="grey-text text-darken-1" htmlFor="password">Wachtwoord</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
            <div className="orange-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
