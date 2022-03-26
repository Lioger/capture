import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetailt from "./pages/MovieDetail";
// Import router
import { Routes, Route, useLocation } from 'react-router-dom';
// Animations
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs />} />
          <Route path='/about' exact element={<AboutUs />} />
          <Route path='/contact' exact element={<ContactUs />} />
          <Route path='/work' exact element={<OurWork />} />
          <Route path='/work/:id' exact element={<MovieDetailt />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
