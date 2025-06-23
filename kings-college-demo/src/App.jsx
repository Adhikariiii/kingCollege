import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./components/homepage.jsx";
import Alumni from "./components/Alumni";
import Admission from "./components/Admission+Aid.jsx";

//people data
import people from "./data.js";

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
        </Routes>
      </Router>
    </>
  );
}
