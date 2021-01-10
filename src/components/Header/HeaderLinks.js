/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

// core components

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>Home</Link>
      </ListItem>
      <ListItem ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>About Us</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/product" className={classes.navLink}>Our Products</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={classes.navLink}>Contact Us</Link>
      </ListItem>
    </List>
  );
}
