import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  
  return (
    <React.Fragment>
      <Box
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      ></Box>
      <Link
        to="/signUp"
        activeClassName="selected"
        // activeStyle={style}
      >
        <MenuItem>
          <Avatar /> Sign Up
        </MenuItem>{" "}
      </Link>
      <Link
        to="/login"
        activeClassName="selected"
        // activeStyle={style}
      >
        <MenuItem>
          <Avatar /> Login
        </MenuItem>
      </Link>
      <Link
        to="/usersListing"
        activeClassName="selected"
        // activeStyle={style}
      >
        <MenuItem>
          <Avatar /> User's Listing
        </MenuItem>
      </Link>
      <Divider />

      {/* </Menu> */}
    </React.Fragment>
  );
}
