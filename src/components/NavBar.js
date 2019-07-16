import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from './logo.png';
import profile from './profile.png';





const profileStyle = {
    float: 'right',
    
  };

  const profileTextStyle = {
    float: 'right',
    fontFamily: 'BebasNeue Bold'
    
  };

export default class NavBar extends Component {
    render() {
        return (
            <div>
        <AppBar position="static" color="white" className={'nav'}>
            
            <Typography variant="title" color="white">
                <a href="http://localhost:3000/"> <img src={logo} alt="Logo" width="10%" /> </a>
                <p className={'text1'} style={profileTextStyle}> PROFILE </p>
                <img src={profile} alt="profile" width="5%" height="5%" style={profileStyle}/>
                
                </Typography>
            
        </AppBar>
            </div>
        )
    }
}
