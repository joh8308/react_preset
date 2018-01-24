import React from 'react';
import {browserHistory} from 'react-router';

/* icon */
import MdAttachMoney from 'react-icons/lib/md/attach-money';
import FaShield from 'react-icons/lib/fa/shield';
import MdLock from 'react-icons/lib/md/lock';
import MdDeveloperMode from 'react-icons/lib/md/developer-mode';

/* Component */
import Header from '../common/header';
import Footer from '../common/footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePath = (path) => {
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <Header />
        <section className="pageheader-default" style={{background: 'url(img/demo/7.jpg)'}}>
          <div className="bgarea-semitransparent">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="landingpage animated fadeInLeftBig notransition"
                      style={{color: "#ffffff", fontSize: 40}}>
                    Crypto Financial Service for Wealth Preservation</h2>
                  <h3 className="landingpage animated fadeInDownBig notransition">Safe transfer system of cryptocurrency
                    via messenger</h3>
                  <div className="btn-wrap animated fadeInUpBig notransition">
                    <a className="btn btn-minimal" href="#">Download NOW</a><span>or</span><a
                    className="btn btn-minimal" href="#">Learn more</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src="http://www.wowthemes.net/demo/calypso/img/demo/desktop3.png"
                       className="img-responsive animated fadeInRightBig notransition" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="semiboxshadow text-center">
            <img src="img/shp.png" className="img-responsive" alt=""/>
          </div>
          <section className="intro-note topspace10">
            <div className="container" style={{marginTop: 30}}>
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Introducing Sovereign Wallet</h1>
                  <p>
                    Mobile Crypto Currency Wallet allows you to send money to your loved ones instantly on your
                    smartphone.
                    <br />
                    Sovereign Wallet has a powerful security feature to protects your wallet and allows you to send
                    Ether as easily as sending a chat message.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="service-box topspace10">
            <div className="container">
              <div className="row">
                <ul className="ca-menu">
                  <li className="col-md-3 animated fadeInLeftNow notransition">
                    <a>
                      <div className="grey-box-icon">
                        <div className="icon-box-top grey-box-icon-pos">
                          <i className="fontawesome-icon medium circle-white center"><MdAttachMoney /></i>
                        </div>
                        <div className="ca-content">
                          <h2 className="ca-main">Coin Transfer</h2>
                          <h3 className="ca-sub">Across all major devices created for you and your business prosperity
                            and your clients' projects.</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="col-md-3 animated fadeInLeftNow notransition">
                    <a>
                      <div className="grey-box-icon">
                        <div className="icon-box-top grey-box-icon-pos">
                          <i className="fontawesome-icon medium circle-white center"><FaShield /></i>
                        </div>
                        <div className="ca-content">
                          <h2 className="ca-main">E2E encrypted secure chat</h2>
                          <h3 className="ca-sub">Straight to the point highly-professional &amp; modern website
                            template</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="col-md-3 animated fadeInRightNow notransition">
                    <a>
                      <div className="grey-box-icon">
                        <div className="icon-box-top grey-box-icon-pos">
                          <i className="fontawesome-icon medium circle-white center"><MdDeveloperMode /></i>
                        </div>
                        <div className="ca-content">
                          <h2 className="ca-main">Decentralized Exchange</h2>
                          <h3 className="ca-sub">Wide layout, boxed layout, semiboxed layout, unlimited color skins,
                            check out the demo panel</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="col-md-3 animated fadeInRightNow notransition">
                    <a>
                      <div className="grey-box-icon">
                        <div className="icon-box-top grey-box-icon-pos">
                          <i className="fontawesome-icon medium circle-white center"><MdLock /></i>
                        </div>
                        <div className="ca-content">
                          <h2 className="ca-main">Wallet self-protection</h2>
                          <h3 className="ca-sub">Highly-professional &amp; modern website template created for your
                            business</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="grayarea topspace40">
            <div className="container" style={{marginTop:20, marginBottom:50}}>
              <h1 className="small text-center animated fadeInLeft notransition">What is MUI?</h1>
              <div className="br-hr type_short">
                <span className="br-hr-h animated fadeInRightNow">
                  <i style={{fontSize: 30, marginTop: -16, color: '#2778C8'}}><img style={{height:30}} src="img/token.png" alt=""/></i>
                </span>
              </div>
              <div id="cbp-qtrotator" className="cbp-qtrotator animated">
                <div className="cbp-qtcontent-custom">
                  <blockquote>
                    <p className="bigquote">
                      MUI는 집시들이 부와 풍요를 기원하고 자신의 신변을 지키기 위해 목걸이 형식으로 가공한 부적입니다. SovereiegnWallet Network안의 MUI는
                      강력한 암호화 모듈이 내장되어있어 당신의 MUI는 외부의 위협으로부터 안전할 것입니다.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          <section className="container animated fadeInDownNow notransition topspace40">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <p className="bigtext">
                    <span className="fontpacifico colortext">Sovereign Community</span>
                  </p>
                  <p>
                    Sovereign Community에 소속되었거나 관심이 있으신가요?
                  </p>
                </div>
                <div className="text-center topspace20">
                  <a onClick={() => this.handlePath('/sovereignintro')} className="buttonblack pointer"><i
                    className="icon-shopping-cart"></i>&nbsp; Introduce</a>
                  <a onClick={() => this.handlePath('/notfound')} className="buttoncolor pointer"><i
                    className="icon-link"></i>&nbsp; Register</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}