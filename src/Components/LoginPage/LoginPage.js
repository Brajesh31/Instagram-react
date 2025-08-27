import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import './LoginPage.css';
import inst_image from '../images/9364675fb26a.svg';
import insta_logo from '../images/logoinsta.png';
import fb from '../images/fb.png';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="login_main">
                            <div>
                                <img src={inst_image} width="450"/>
                            </div>
                        <div>
                        <div className="loginpage_rightcomponent">
                            <img className="loginpage_logo" src={insta_logo}/>
                            <div className="loginPage_signin">
                                <input className="loginpage_text" type="text" placeholder="Phone number, email or username"/>
                                <input className="loginpage_text" type="password" placeholder="Password"/>
                                <button className="login_button">Sign in</button>
                            </div>
                            <div className="login_ordiv">
                                <div className="login_divider1"></div>
                                <div className="login_or">Or</div>
                                <div className="login_divider2"></div>
                            </div>
                            <div className="login_fb">
                                <img src={fb} width="15px" style={{"marginRight" :"5px"}}/>Log in with Facebook</div>
                            <div className="login_forgot">Forgot Password?</div>
                        
                        </div>

                        <div className="loginpage_signupoption">
                            <div className="loginpage_signin">
                                <p>Don't have an account? <a href="">Sign up</a></p>
                            </div>
                            {/* <div className="loginpage_signup">
                                Get the app
                            </div> */}
                        </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;