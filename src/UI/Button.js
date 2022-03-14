import { Fragment } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button type={props.type} className={classes.button} >Apply</button>
    </Fragment>
  );
};

export default Button;
