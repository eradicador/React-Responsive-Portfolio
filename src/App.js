
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css"
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Projects}/>
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
