import React from "react";
import { useLocation, Navigate } from "react-router-dom";
export const isAuthenticated = () => {
  let notezy = JSON.parse(localStorage.getItem("notezy"));
  // console.log(notezy);
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
