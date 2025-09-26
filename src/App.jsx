import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About/About";
import PageWrapper from "./components/PageWrapper";
import BackToTop from "./components/BackToTop";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Program from "./pages/Program/Index";
import Volunteer from "./pages/Volunteer/Index";
import Details from "./pages/Program/Details";
import ServicesDetails from "./pages/Program/ServicesDetails";
// import Donation from "./pages/Donation/Index";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route
            index
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/program"
            element={
              <PageWrapper>
                <Program />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/program/:id"
            element={
              <PageWrapper>
                <Details />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/service/:id"
            element={
              <PageWrapper>
                <ServicesDetails />
              </PageWrapper>
            }
          />
          <Route
            index
            path="/volunteer"
            element={
              <PageWrapper>
                <Volunteer />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          {/* <Route
            path="/donate"
            element={
              <PageWrapper>
                <Donation />
              </PageWrapper>
            }
          /> */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
