import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import PasswordField from 'material-ui-password-field';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

function Login(props) {
  return (
    <div>
      <h1 style={{margin: '35px'}}>Welcome</h1>
      <TextField
        floatingLabelText="Enter username"
      /><br />
      <PasswordField
        hintText="At least 8 characters"
        floatingLabelText="Enter your password"
        errorText="Your password is too short"
      /><br/>
      <br/>
      <RaisedButton label="Log In In" primary={true} style={style} />
      <RaisedButton label="Sign Up" primary={true} style={style} />
      <br/>
      <a href="">Don't have an account?</a>
      <br/>   
      <br/>
    </div>
  );
}

export default Login;