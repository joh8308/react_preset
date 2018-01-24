import React from 'react';
import {browserHistory} from 'react-router';
import '../css/style.css';

/* icon */
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePath = (path) => {
    browserHistory.push(path);
  }

  handleStatus = (path, type) => {
    let currentPath = browserHistory.getCurrentLocation().pathname;

    if(type) {
      if(type == 'root') {
        if(currentPath == path) {
          return 'dropdown active';
        }
        else {
          return 'dropdown'
        }
      }
    }

    if(currentPath.indexOf(path) != -1) {
      return 'dropdown active';
    }
    else {
      return 'dropdown'
    }
  }

  render() {
    return (
      <nav className="navbar wowmenu" role="navigation" style={{marginBottom:0}}>
        <div className="container">
          <div className="navbar-header" style={{marginTop: -5}}>
            <a className="navbar-brand logo-nav pointer" style={{marginBottom:10}}><img src="img/sovereign_logo.png" alt="logo"/></a>
          </div>
          <ul id="nav" className="nav navbar-nav pull-right">
            <li className={this.handleStatus('/', 'root')} onClick={()=>this.handlePath('/')}><a className="pointer">Home</a></li>
            <li className={this.handleStatus('/about')} style={{marginTop:0}} onClick={() => this.handlePath('/about')}>
              <a className="dropdown-togglev pointer" data-toggle="dropdown">About</a>
            </li>
            <li className={this.handleStatus('/roadmap')} onClick={() => this.handlePath('/roadmap')}>
              <a className="dropdown-toggle pointer" data-toggle="dropdown">Roadmap</a>
            </li>
            <li className={this.handleStatus('/team')} onClick={() => this.handlePath('/team')}>
              <a className="dropdown-toggle pointer" data-toggle="dropdown">Team</a>
            </li>
            <li className={this.handleStatus('/sovereign')}>
              <a className="dropdown-toggle pointer" data-toggle="dropdown">Sovereign Community
                <i style={{fontWeight:'bold'}}><MdKeyboardArrowDown /></i>
              </a>
              <ul className="dropdown-menu">
                <li className="pointer" onClick={()=>this.handlePath('/sovereignintro')}><a className="pointer">Introduce</a></li>
                <li className="pointer" onClick={()=>this.handlePath('/notfound')}><a className="pointer">Register</a>
                  {/*<ul className="dropdown-menu sub-menu">*/}
                    {/*<li><a href="#">Member</a></li>*/}
                    {/*<li><a href="#">Transfer</a></li>*/}
                  {/*</ul>*/}
                </li>
              </ul>
            </li>
            <li className={this.handleStatus('/faq')} onClick={()=>this.handlePath('/faq')}>
              <a className="dropdown-toggle pointer" data-toggle="dropdown">FAQ</a>
            </li>
            {/*<li className={this.handleStatus('/contact')} onClick={()=>this.handlePath('/contact')}><a className="pointer">Contact</a></li>*/}
          </ul>
        </div>
      </nav>
    );
  }
}