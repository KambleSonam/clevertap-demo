// import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk'
import { Component } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import promptBell from './assets/promptBell.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { localStorage: '', cacheData: ''};
    this.clickEvent = this.clickEvent.bind(this);
  }

  // componentDidMount() {
  //   clevertap.spa = true
  // }

  clickEvent() {
    clevertap.onUserLogin.push({ 
      "Site": {
        "Name": "Sonam",                         // String
        "Identity": 610260622,                      // String or number
        "Email": "amee10Aug@test.com",               // Email address of the user
        "Phone": "+14159551234",                    // Phone (with the country code)
        "Gender": "F",                              // Can be either M or F
        // "DOB": new Date(),                          // Date of Birth. Javascript Date object
        // "Photo": 'www.foobar.com/image.jpeg',       // URL to the Image
        "Price": 69.99,
      }
    })
    
    clevertap.event.push("Product rated");
 
    document.addEventListener('CT_web_native_display', function(e) {
      console.log('Event is ', e)
    })
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route exact path='/events' element={<Events/>} />
          <Route exact path='/annual' element={<AnnualReport/>} />
          <Route exact path='/team' element={<Teams/>} />
          <Route exact path='/blogs' element={<Blogs/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
