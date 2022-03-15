import { Fragment } from "react";
import classes from "./OutputedValues.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkIcon from "@mui/icons-material/Link";

const OutputedValues = (props) => {
  const data = props.data;
  console.log(data);

  let content;
  if (!data) {
    content = <h2>{props.header}</h2>;
  }
  if (data) {
    content = (
      <Fragment>
        <h2>Applied Signature</h2>
        <div>
          <label>
            Name Surname :<span> {data.name + " " + data.surname}</span>
          </label>
          <img src="https://via.placeholder.com/100" alt="Crashed" />
          <br />
          <label>
            Title :<span> {data.title}</span>
          </label>
          <br />
          <label>
            Gender :<span> {data.gender}</span>
          </label>
          <br />
          <label>
            Team :<span> {data.team}</span>
          </label>
          <br />
        </div>
        <br />
        <hr />
        <div className={classes.second}>
          <label>
            <PhoneIcon color="primary" /> Mobile / Office Nu :{" "}
            <span>{data.mobile + " / " + data.office}</span>
          </label>
          <label>
            <HomeIcon color="primary" /> Address : <span>{data.address}</span>
          </label>
          <label>
            <AlternateEmailIcon color="primary" /> Email :{" "}
            <span>{data.email}</span>
          </label>
          <label>
            <LinkIcon color="primary" /> Url : <span>{data.linkedin}</span>
          </label>
        </div>
        <div className={classes.clearfix}>
          <span className={classes.icons}>
            <a href={data.face}>
              <FacebookIcon color="danger" />
            </a>
            <a href={data.twitter}>
              <TwitterIcon />
            </a>
            <a href={data.insta}>
              <InstagramIcon />
            </a>
            <a href={data.linkedin}>
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </Fragment>
    );
  }

  return <div className={classes.div}>{content}</div>;
};

export default OutputedValues;
