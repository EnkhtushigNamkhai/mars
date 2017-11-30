import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SearchBox from '../containers/SearchBox';
import MovieDetail from '../containers/MovieDetail';

import { Route, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';


import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';

//will need to make app into a class so i can do this.props.children

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: 'Home'
    }
  }

  //when title gets clicked, takes user to home screen
  homeHandler() {
    console.log('display the home screen');
    this.setState({
      currentScreen: 'Home'
    });
  }

  //when log in is clicked takes user to log in screen
  loginHandler() {
    console.log('display the login screen');
    this.setState({
      currentScreen: 'Login'
    });
  }

  loggedInHandler() {
    console.log('user has logged in');
    //make like a logged in Variable to true ?
  }

  signedUpHandler() {
    //redirect them to the log in?
  }

  helper() {
    if (this.state.currentScreen === 'Home') {
      return <Home />
    } else if (this.state.currentScreen === 'Login') {
      return <Signup login={this.loggedInHandler.bind(this)}/>
    }
  }


  render () {
    return (
      <Paper>
        <AppBar
          title="DEMI"
          onTitleTouchTap={this.homeHandler.bind(this)}>
          <RaisedButton onClick={this.loginHandler.bind(this)} label="LogIn" style={{margin: '20px'}} />
        </AppBar>
        {this.helper()}   
      </Paper>
    )
  }
  // return (
  // );
// <IconMenu
//           iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
//           anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//           targetOrigin={{horizontal: 'left', vertical: 'top'}}>
          
//           <MenuItem primaryText="Settings" onClick={this.settingsHandler.bind(this)}/>
//           <MenuItem primaryText="Login" onClick={this.loginHandler.bind(this)}/>
//           <MenuItem primaryText="Sign out" onClick={this.signoutHandler.bind(this)}/>

//           <NavLink to="/login" exact activeClassName="active" >login nav</NavLink>            
//         </IconMenu>
}




