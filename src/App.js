import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { HomeGreet } from "./components/HomePage";
import AllNotes from "./components/AllNotes";
import CreateNew from "./components/CreateNew";
import NoteView from "./components/NoteView";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route path="/home" element={<HomePage />} /> */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      >
        <Route
          path="/home"
          element={
            <HomeGreet
              heading="Welcome back 👋"
              subHeading="Start making your notes"
            />
          }
        />
        <Route path="all" element={<AllNotes />} />
        <Route path="new" element={<CreateNew />} />
        <Route path="notes/:noteId" element={<NoteView />} />
      </Route>
    </Routes>
  );
}

export default App;
