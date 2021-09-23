import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "./CommonHeader";
import { SignupActions } from "../Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
           password: "",
      userName: "",
      forget:false,
      otpSent:false,
      otp:"",
      resetPassword:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.sendOtp = this.sendOtp.bind(this);
    this.validateOtp = this.validateOtp.bind(this);
    this.newPassword = this.newPassword.bind(this);
  }

  handleChange(event) {
    console.log("event", event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  forgotPassword(){
    this.setState({forget:true})
  }
  submitHandler() {
    let { userName, password } = this.state;
    SignupActions.login({ userName, password }, (err, res) => {
      if (!err) {
        if (res.success == false) {
          toast(res.message);
        } else {
          toast(res.message);
        }
      } else {
        toast(res.message);
      }
    });
  }
  sendOtp(){
    let { userName } = this.state;
    SignupActions.sendOTp({ userName}, (err, res) => {
      if (!err) {
        if (res.success == false) {
          toast(res.message);
        } else {
          toast(res.message);
          this.setState({otpSent:true})
        }
      } else {
        toast(res.message);
      }
    });
  }
  newPassword(){
    let { userName,password } = this.state;
    SignupActions.newPassword({ userName,password}, (err, res) => {
      if (!err) {
        if (res.success == false) {
          toast(res.message);
        } else {
          toast(res.message);
          
          this.setState({ password: "",
          userName: "",
          forget:false,
          otpSent:false,
          otp:"",
          resetPassword:false})
        }
      } else {
        toast(res.message);
      }
    });
  }
  validateOtp(){
    let { userName,otp } = this.state;
    SignupActions.validateOtp({ userName,otp}, (err, res) => {
      if (!err) {
        if (res.success == false) {
          toast(res.message);
        } else {
          toast(res.message);
          this.setState({resetPassword:true})
        }
      } else {
        toast(res.message);
      }
    });
  }

  styleClass = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      paddingTop: "50px",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  render() {
    const classes = this.styleClass;

    return (
      <Container component="main" maxWidth="md">
        <Header />
        <ToastContainer> </ToastContainer>

        <CssBaseline />
        {/* <Typography component="h1" variant="h5">
                login
                </Typography> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2} xs={12} sm={6}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
                value={this.state.userName}
                onChange={this.handleChange}
                disabled={this.state.otpSent}
              />
            </Grid>
            <Grid item xs={12}>
           {this.state.forget ? this.state.otpSent ?   <TextField
                variant="outlined"
                required
                fullWidth
                id="otp"
                label="Enter Otp"
                name="otp"
                autoComplete="otp"
                value={this.state.otp}
                onChange={this.handleChange}
                disabled={this.state.resetPassword}
              /> : "" :   <input
                type="password"
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                disabled={this.state.forget}
              />}
            </Grid>
            <Grid item xs={12}>
            {this.state.forget ? this.state.otpSent ?  <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.validateOtp}
              >
                Validate Otp
              </Button>:
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.sendOtp}
                disabled={this.state.resetPassword}
              >
                Request Otp
              </Button>:
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.submitHandler}
              >
                Login
              </Button> }  
              {this.state.resetPassword? <input
                type="password"
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                // disabled={this.state.forget}
              />:""}
              {this.state.resetPassword? <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.newPassword}
              >
               Reset Password
              </Button>:""}
            </Grid>
            <Grid item xs={12}>
            <h4>Forgot password?<a onClick={this.forgotPassword} style={{cursor:"pointer"}}>Click here</a></h4>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
