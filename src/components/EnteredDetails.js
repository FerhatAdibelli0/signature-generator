import classes from "./EnteredDetails.module.css";
import Button from "../UI/Button";
import { useRef } from "react";

const EnteredDetails = (props) => {
  const enteredNameRef = useRef();
  const enteredSurnameRef = useRef();
  const enteredGenderRef = useRef();
  const enteredTitleRef = useRef();
  const enteredEmailRef = useRef();
  const enteredTeamRef = useRef();
  const enteredAddressRef = useRef();
  const enteredTwitterRef = useRef();
  const enteredInstagramRef = useRef();
  const enteredFaceRef = useRef();
  const enteredLinkedRef = useRef();
  const enteredMobileRef = useRef();
  const enteredOfficeRef = useRef();
  const enteredImageRef = useRef();
  const enteredUrlRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    props.onAdd({
      name: enteredNameRef.current.value,
      surname: enteredSurnameRef.current.value,
      gender: enteredGenderRef.current.value,
      title: enteredTitleRef.current.value,
      email: enteredEmailRef.current.value,
      team: enteredTeamRef.current.value,
      address: enteredAddressRef.current.value,
      twitter: enteredTwitterRef.current.value,
      insta: enteredInstagramRef.current.value,
      face: enteredFaceRef.current.value,
      linkedin: enteredLinkedRef.current.value,
      mobile: enteredMobileRef.current.value,
      office: enteredOfficeRef.current.value,
      image: enteredImageRef.current.value,
      url: enteredUrlRef.current.value,
    });
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <h2>Enter Signature Detail</h2>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" ref={enteredNameRef} />
          <label htmlFor="surname">Surname</label>
          <input type="text" ref={enteredSurnameRef} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="text" ref={enteredGenderRef} />
          <label htmlFor="title">Title</label>
          <input type="text" ref={enteredTitleRef} />
        </div>
        <div>
          <label htmlFor="team">Team</label>
          <input type="text" ref={enteredTeamRef} />
          <label htmlFor="email">Email</label>
          <input type="email" ref={enteredEmailRef} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" ref={enteredAddressRef} />
          <label htmlFor="url">Url</label>
          <input type="url" ref={enteredUrlRef} />
        </div>
        <div>
          <label htmlFor="office">Office Phone</label>
          <input type="tel" ref={enteredOfficeRef} />
          <label htmlFor="mobile">Mobile Phone</label>
          <input type="tel" ref={enteredMobileRef} />
        </div>
        <div>
          <label htmlFor="facebook">Facebook Url</label>
          <input type="url" ref={enteredFaceRef} />
          <label htmlFor="twitter">Twitter Url</label>
          <input type="url" ref={enteredTwitterRef} />
        </div>
        <div>
          <label htmlFor="linkedin">Linkedin Url</label>
          <input type="url" ref={enteredLinkedRef} />
          <label htmlFor="instagram">Instagram Url</label>
          <input type="url" ref={enteredInstagramRef} />
        </div>
        <div>
          <label htmlFor="image">İmage Url</label>
          <input type="url" ref={enteredImageRef} />
        </div>
      </div>
      <Button type="submit" />
    </form>
  );
};

export default EnteredDetails;
