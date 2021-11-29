import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = () => {
  let notezy = JSON.parse(localStorage.getItem("notezy"));
  console.log(notezy);
  if (notezy && notezy.value.user) {
    return true;
  } else {
    return false;
  }
};

export default function PrivateRoute({ children }) {
  let location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} />;
  } else {
    return children;
  }
}
