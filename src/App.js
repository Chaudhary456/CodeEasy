
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Resources from './Resources';
import Footer from './Footer';
import Home from './Home';
import User from './User';
import MyProfile from './MyProfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar profile={profile} setProfile={setProfile}/>
        {/* <section className="offset"></section> */}
        <Switch>
          <Route exact path="/" >
            <Home />
            <Carousel />
          </Route>
          <Route exact path="/Resources/:id" >
            <Resources />
          </Route>
          <Route exact path="/User">
            <User profile={profile} setProfile={setProfile} setUserData={setUserData}/>
          </Route>
          <Route exact path="/MyProfile">
            <MyProfile  userData={userData} setUserData={setUserData}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// npx json-server --watch data/db.json --port 8000