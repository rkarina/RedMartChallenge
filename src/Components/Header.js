import React, { Component } from 'react';
import RedmartLogo from '../Content/assets/redmart_logo.png';

class Header extends Component {
  render(){
    return (
      <header className="App-header">
        <div className="TopBar">
          <div className="RedmartLogo">
            <img src={RedmartLogo} />
          </div>
          <div className="Actions">
            <div className="NavButton BrowseButton">
              <label>Browse</label>
            </div>
            <div className="NavButton">
                <label>Cart</label>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
