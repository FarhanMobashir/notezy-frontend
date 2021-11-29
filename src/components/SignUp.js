import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react/cjs/react.development";
import { PrimaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { TextInput } from "./styles/Inputs.style";
import { ViewPill } from "./styles/Pills.style";
import { useNavigate } from "react-router-dom";
import { SkeletonLoader } from "./SkeletonNotesLoader";

export default function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, showErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  function signUp(formData) {
    const apiUrl = "https://notezy.herokuapp.com";
    setLoading(true);
    setTimeout(() => {
      fetch(apiUrl + "/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          // setLoading(true);
          return res.json();
        })
        .then((data) => {
          console.log("Success", data.token);
          setLoading(false);
          // setCurrentUser(data.token);
          navigate("/signin");
        })
        .catch((err) => {
          setError(err);
          showErrorMessage(true);
          setLoading(false);

          return console.error(err);
        });
    }, 200);
  }
  function isValidEmail(email) {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }

  function isValidPassword(password) {
    if (password.length >= 3) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (!isValidEmail(email) || !isValidPassword(password)) {
      setValidationError(true);
    } else {
      setValidationError(false);

      const data = {
        email,
        password,
      };
      signUp(data);
    }
  }
  return (
    <>
      {loading ? (
        <SkeletonLoader loaderText="Making your account" />
      ) : (
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flex="1"
        >
          <h1>SignUp</h1>
          {errorMessage ? (
            <h4 style={{ color: "red" }}>
              Email already in use, please select a unique one
            </h4>
          ) : null}
          <form onSubmit={handleSubmit}>
            <Flex flexDirection="column">
              <TextInput
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              <TextInput
                ref={passwordRef}
                type="password"
                placeholder="Enter password"
              />
              <PrimaryButton type="submit">Sign up</PrimaryButton>
            </Flex>
          </form>
          {validationError ? <p>Enter email password properly</p> : null}

          <Flex justifyContent="space-between" alignItems="center">
            <p>Already have an account ?</p>
            <Link to="/signin">
              <ViewPill>Signin</ViewPill>
            </Link>
          </Flex>
        </Flex>
      )}
    </>
  );
}