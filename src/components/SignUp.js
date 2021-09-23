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
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          userName: "",
          addressLine:"",
          city:"",
          state:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

      }


    handleChange(event) {
        console.log("event",event)
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
      submitHandler() {
          let {firstName,lastName,phoneNumber,email,password,userName,addressLine,city,state} = this.state;
          SignupActions.signUp({firstName,lastName,phoneNumber,email,password,userName,addressLine,city,state}, (err, res) => {
            if (!err) {
             if(res.success == false){
                 toast(res.message)
             }else{
                toast(res.message)
                // this.props.history.push("/login")
             }
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
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} xs={12} sm={6}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                value={this.state.userName}
                onChange={this.handleChange}
                autoComplete="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                value={this.state.Password}
                onChange={this.handleChange}
                name="password"
                
                autoComplete="password"
              /> */}
              <input
                type="password"
                id="password"
                label="Password"
                name="password"
                placeholder="Password"
                autoComplete="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
              />
            </Grid>
            <Grid item xs={12}>
              <PhoneInput
                    placeholder='Enter phone number'
                    value={this.state.phoneNumber}
                    name="phoneNumber"
                    onChange={(phoneNumber) =>
                        this.setState({ phoneNumber })
                      }                       
                    />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="addressLine"
                label="Address Line"
                name="addressLine"
                value={this.state.addressLine}
                onChange={this.handleChange}
                autoComplete="addressLine"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                value={this.state.city}
                onChange={this.handleChange}
                name="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="state"
                variant="outlined"
                required
                value={this.state.state}
                onChange={this.handleChange}
                fullWidth
                id="state"
                label="State"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick ={this.submitHandler}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}
