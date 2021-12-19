import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Card from "./components/shared/Card";
import Post from "./components/Post";
import PageNotFound from "./pages/PageNotFound";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats  />
                  <FeedbackList  />
                </>
              }
            />
            <Route path="/post/:id/:name/*" element={<Post />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
          </Routes>
          <Card>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <span>------</span>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
