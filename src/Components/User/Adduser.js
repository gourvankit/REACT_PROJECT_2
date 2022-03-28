import { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import wrapper from "../wrapper/wrapper";
const AddUser = (props) => {
  let userArray = [];
  
  let [error, setError] = useState();
  let inputName=useRef();
  let inputAge=useRef();

  const addUserHandler = (event) => {
    const username=inputName.current.value
    const age=inputAge.current.value
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });

      return;
    }
    if (age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (Greater than 0)",
      });

      return;
    }
    props.onAddUser(username, age);
    inputName.current.value='';
    inputAge.current.value='';
    
  };
  
  const errorHandler = () => {
    setError(null);
  };
  return (
    <wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onPress={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={inputName}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            ref={inputAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </wrapper>
  );
};
export default AddUser;
