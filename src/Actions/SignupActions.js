import Agent from "../services/RequestInstance";
import { ServerError } from "../utils/helpers";

import config from "../config/Config";

const BACKEND_URL = config.BACKEND_URL;

function signUp(payload, cb) {
  Agent.fire("post", `${BACKEND_URL}/users/signup`)
    .send(payload)
    .end((err, res) => {
        console.log("inside action",res)
      var error =
        err || res.error
          ? ServerError(res)
          : res.body && res.body.error
          ? ServerError(res)
          : null;
          if (typeof cb === "function") return cb(error, res && res.body);
        });
}
function allUsers(payload, cb) {
    Agent.fire("get", `${BACKEND_URL}/users/allUsers`)
      .send(payload)
      .end((err, res) => {
          console.log("inside action",res)
        var error =
          err || res.error
            ? ServerError(res)
            : res.body && res.body.error
            ? ServerError(res)
            : null;
            if (typeof cb === "function") return cb(error, res && res.body);
          });
  }
  function login(payload, cb) {
    Agent.fire("post", `${BACKEND_URL}/users/login`)
      .send(payload)
      .end((err, res) => {
          console.log("inside action",res)
        var error =
          err || res.error
            ? ServerError(res)
            : res.body && res.body.error
            ? ServerError(res)
            : null;
            if (typeof cb === "function") return cb(error, res && res.body);
          });
  }
  function sendOTp(payload, cb) {
    Agent.fire("post", `${BACKEND_URL}/users/sendOTp`)
      .send(payload)
      .end((err, res) => {
          console.log("inside action",res)
        var error =
          err || res.error
            ? ServerError(res)
            : res.body && res.body.error
            ? ServerError(res)
            : null;
            if (typeof cb === "function") return cb(error, res && res.body);
          });
  }

  function validateOtp(payload, cb) {
    Agent.fire("post", `${BACKEND_URL}/users/validateOtp`)
      .send(payload)
      .end((err, res) => {
          console.log("inside action",res)
        var error =
          err || res.error
            ? ServerError(res)
            : res.body && res.body.error
            ? ServerError(res)
            : null;
            if (typeof cb === "function") return cb(error, res && res.body);
          });
  }
  function newPassword(payload, cb) {
    Agent.fire("post", `${BACKEND_URL}/users/newPassword`)
      .send(payload)
      .end((err, res) => {
          console.log("inside action",res)
        var error =
          err || res.error
            ? ServerError(res)
            : res.body && res.body.error
            ? ServerError(res)
            : null;
            if (typeof cb === "function") return cb(error, res && res.body);
          });
  }

export default {
    signUp,
    allUsers,
    login,
    sendOTp,
    validateOtp,
    newPassword
};
