import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import { SkeletonLoader } from "./SkeletonNotesLoader";
import { PrimaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { TextInput } from "./styles/Inputs.style";
import { ViewPill } from "./styles/Pills.style";
import { BasicToastContainer } from "./styles/Toasts.style";

export default function SignIn() {
  const [showToast, setShowToast] = useState(true);
  const navigate = useNavigate();
  const [errorMessage, showErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, setCurrentUser } = useAuth();
  function signIn(formData) {
    const apiUrl = "https://notezy.herokuapp.com";
    setLoading(true);
    setTimeout(() => {
      fetch(apiUrl + "/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          // setLoading(true);
          console.log(res);
          if (res.status === 401) {
            showErrorMessage(true);
            return;
          }
          return res.json();
        })
        .then((data) => {
          console.log("Success", data);
          setLoading(false);
          setCurrentUser({
            user: true,
            token: data.token,
          });
          navigate("/home");
        })
        .catch((err) => {
          setError(err);
          showErrorMessage(true);
          setLoading(false);
          console.error(err);
        });
    }, 10);
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
      signIn(data);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return null;
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonLoader loaderText="Signing you in..." />
      ) : (
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          flex="1"
        >
          {showToast ? (
            <BasicToastContainer bgColor="grey">
              Enter email and password to sign in
            </BasicToastContainer>
          ) : null}
          <h1>SignIn</h1>
          {errorMessage ? (
            <h4 style={{ color: "red" }}>
              Invalid email or password combination
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
              <PrimaryButton type="submit">Sign in</PrimaryButton>
            </Flex>
          </form>
          {validationError ? <p>Enter email password properly</p> : null}
          <Flex justifyContent="space-between" alignItems="center">
            <p>Want to create account ?</p>
            <Link to="/signup">
              <ViewPill>Signup</ViewPill>
            </Link>
          </Flex>
        </Flex>
      )}
    </>
  );
}
