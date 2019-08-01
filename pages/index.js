import React, { Component } from 'react';
import Link from 'next/link';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu-container">
          <Link href="/Home"><div className="menu"><a>Home</a></div></Link>
          <Link href="/About"><div className="menu"><a>About Us</a></div></Link>
          <Link href="/ContactUs"><div className="menu"><a>Contact Us</a></div></Link>
        </div>
      </div>
    );
  }
}

export default App;