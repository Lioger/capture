import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetailt from "./pages/MovieDetail";
// Import router
import { Routes, Route, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/capture" exact element={<AboutUs />} />
          <Route path="/capture/about" exact element={<AboutUs />} />
          <Route path="/capture/contact" exact element={<ContactUs />} />
          <Route path="/capture/work" exact element={<OurWork />} />
          <Route path="/capture/work/:id" exact element={<MovieDetailt />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
