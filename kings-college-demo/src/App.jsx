import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./components/homepage.jsx";
import Alumni from "./components/Alumni";
import Admission from "./components/Admission+Aid.jsx";
import Page from "./components/lifeAtKings.jsx";
import AboutKings from "./components/aboutKings.jsx";
import StudentProjects from "./components/studentProjects.jsx";
import Event from "./components/events.jsx";

//people data
import people from "./data.js";
import team from "./team.js";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route path="/Alumni" element={<Alumni detail={people} />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/lifeAtKings" element={<Page />} />
          <Route path="/studentProjects" element={<StudentProjects />} />
          <Route path="/AboutKings" element={<AboutKings detail={team} />} />
          <Route path="/Events" element={<Event />} />
        </Routes>
      </Router>
    </>
  );
}
