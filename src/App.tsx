import { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import BrowseCoursePage from "./pages/BrowseCoursePage";
import GeneralQuizPage from "./pages/GeneralQuizPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/PlayPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import AdminRedirectRoute from "./utils/AdminRedirectRoute";
import RedirectRoute from "./utils/RedirectRoute";
import AdminPage from "./pages/AdminPage";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route element={<RedirectRoute />}>
            <Route
              path="/Courses/:courseName/:videoId"
              element={<CoursesPage />}
            />
            <Route path="/Courses/:courseName" element={<BrowseCoursePage />} />
            <Route path="/Quiz" element={<GeneralQuizPage />} />
            <Route path="/Courses/:all" element={<BrowseCoursePage />} />
            <Route path="/Profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AdminRedirectRoute />}>
            <Route path="/admin/:id" element={<AdminPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
