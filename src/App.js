import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home_Components/Home.jsx";
import ExerciseBlogs from "./Card_Components/ExerciseBlogs.jsx";
import InterestsBlogs from "./Card_Components/InterestsBlogs.jsx";
import FoodBlogs from "./Card_Components/FoodBlogs.jsx";
import EachFood from "./Card_Components/EachFood.jsx";
import EachActivity from "./Card_Components/EachActivity.jsx";
import Footer from "./Home_Components/Footer.jsx";
import Navbar from "./Home_Components/Navbar.jsx";
import AboutMe from "./About_Me/aboutMe.jsx";
import { allItems } from "./Data/AllData.jsx";
import { cardExplainInfo } from "./Data/HomeCardsData.jsx";
import ContactUs from "./ContactUs_Components/ContactUs";

function App(props) {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar allItems={allItems} />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/eli-blog">
              <Home cardExplainInfo={cardExplainInfo} />
            </Route>
            <Route exact path="/food-blogs">
              <FoodBlogs allItems={allItems} />
            </Route>
            <Route path="/food-blogs/:id">
              <EachFood allItems={allItems} />
            </Route>
            <Route exact path="/life-blogs">
              <InterestsBlogs allItems={allItems} />
            </Route>
            <Route path="/life-blogs/:id">
              <EachActivity />
            </Route>
            <Route exact path="/exercise-blogs">
              <ExerciseBlogs />
            </Route>
            <Route path="/exercise-blogs/:id">
              <EachActivity />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/comments">
              <ContactUs />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
