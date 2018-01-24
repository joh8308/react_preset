import React from 'react';
import {browserHistory} from 'react-router';

/* icon */
import FaAndroid from 'react-icons/lib/fa/android';
import FaApple from 'react-icons/lib/fa/apple';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import GoChevronUp from 'react-icons/lib/go/chevron-up';


export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePath = (path) => {
    browserHistory.push(path);
  }

  render() {
    return (
      <section>
        <div className="footer">
          <div className="container animated fadeInUpNow notransition">
            <div className="row">
              <div className="col-md-4">
                <h1 className="footerbrand">SovereignWallet Network</h1>
                <p>
                  이 페이지는 Sovereign Network 제품들을 소개하는 페이지입니다.
                </p>
                <p>
                  강력한 보안이 탑재된 세상에서 가장 안전한 화폐와 앱을 만나보세요.
                </p>
                <p>
                  Made with<i class="icon-heart"></i> by <span className="colortext">S</span>overeign <span className="colortext">N</span>etwork.
                </p>
              </div>
              <div className="col-md-4">
                <h1 className="title"><span class="colortext">F</span>ind <span class="font100">Us</span></h1>
                <div className="footermap">
                  <p>
                    <strong>Address </strong><br />
                    12 Marina Boulevard #17-01 MarinaBayFinancial Centre(MBFC) Tower 3 Singapore 018982
                  </p>
                  <p>
                    <strong>Phone: </strong> + 65 6809 5199
                  </p>
                  <p>
                    <strong>Fax: </strong> + 65 6809 5001
                  </p>
                  <p>
                    <strong>Email: </strong> support@nod-bizware.com
                  </p>
                  <ul className="social-icons list-soc">
                    <li><a href="#"><i style={{color: '#bfbfbf'}}><FaAndroid /></i></a></li>
                    <li><a href="#"><i style={{color: '#bfbfbf'}}><FaApple /></i></a></li>
                    <li><a href="#"><i style={{color: '#bfbfbf'}}><FaFacebookSquare /></i></a></li>
                    <li><a href="#"><i style={{color: '#bfbfbf'}}><FaInstagram /></i></a></li>
                    <li><a href="#"><i style={{color: '#bfbfbf'}}><FaLinkedin /></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <h1 className="title"><span className="colortext">S</span>overeign <span className="font100">Voice</span></h1>
                <div id="quotes">
                  <div>
                    {/*<div className="avatar">*/}
                      {/*<img src="http://wowthemes.net/demo/biscaya/img/demo/avatar.jpg" alt="avatar" />*/}
                    {/*</div>*/}
                    <span>
                      "당신의 자산을 안전하게 보호하고 싶으신가요? 물샐틈없는 강력한 암호화로 무장한 Mui와 3세대 암호화 알고리즘으로 보호된 Sovereign Wallet이 당신이 찾는 해답입니다.<span style={{fontFamily:'arial'}}>"</span>
                    </span>
                  </div>
                  {/*<div className="textItem">*/}
                    {/*<div className="avatar">*/}
                      {/*<img src="http://wowthemes.net/demo/biscaya/img/demo/avatar.jpg" alt="avatar" />*/}
                    {/*</div>*/}
                    {/*"How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?<span style={{fontFamily:"arial"}}>"</span><br/><b>Ralph G. Flowers </b>*/}
                  {/*</div>*/}
                </div>
                <div className="clearfix">
                </div>
              </div>
            </div>
          </div>
        </div>
        <p id="back-top">
          <a href="#top"><span><GoChevronUp style={{marginTop:10, color: '#fff', fontSize:20}} /></span></a>
        </p>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <p className="pull-left">
                  &copy; Copyright 2014 WowThemes.net
                </p>
              </div>
              <div class="col-md-8">
                <ul class="footermenu pull-right">
                  <li className="pointer" onClick={()=>this.handlePath('/')}><a>Home</a></li>
                  <li className="pointer" onClick={()=>this.handlePath('/about')}><a>About</a></li>
                  <li className="pointer" onClick={()=>this.handlePath('/roadmap')}><a>RoadMap</a></li>
                  <li className="pointer" onClick={()=>this.handlePath('/team')}><a>Team</a></li>
                  <li className="pointer" onClick={()=>this.handlePath('/sovereignintro')}><a>Sovereign Community</a></li>
                  <li className="pointer" onClick={()=>this.handlePath('/faq')}><a>FAQ</a></li>
                  {/*<li className="pointer" onClick={()=>this.handlePath('/contact')}><a>Contact</a></li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}