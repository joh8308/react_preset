import React from 'react';
import {browserHistory} from 'react-router';

/* icon */
import MdLocationCity from 'react-icons/lib/md/location-city';
import FaExchange from 'react-icons/lib/fa/exchange';
import MdPhoneAndroid from 'react-icons/lib/md/phone-android';
import FaAngellist from 'react-icons/lib/fa/angellist';
import FaClipboard from 'react-icons/lib/fa/clipboard';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaMoney from 'react-icons/lib/fa/money';
import FaDollar from 'react-icons/lib/fa/dollar';
import MdDeveloperMode from 'react-icons/lib/md/developer-mode';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    console.log('history', browserHistory.getCurrentLocation());
  }

  render() {
    return (
      <div>
        <section className="pageheader-default text-center">
          <div className="semitransparentbg">
            <h1 className="animated fadeInLeftBig notransition">About us</h1>
            <p className="animated fadeInRightBig notransition container wowbreadcr">
              Company History
            </p>
          </div>
        </section>
        <div>
          <div className="semiboxshadow text-center">
            <img src="img/shp.png" className="img-responsive" alt="" />
          </div>
          <section className="container animated fadeInDown notransition">
            <div className="row blogindex">
              <div className="col-md-9" style = {{width:'100%'}}>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <h2>Introducing Company</h2>
                      {/*<span className="meta bottomspace30">By <a href="#" title="Posts by Henry Austin" rel="author">Henry Austin</a> <span className="bullet">•</span> November 5, 2013 <span className="bullet">•</span> <a href="#" title="View all posts in Food &amp; Health" rel="category tag">Food &amp; Health</a></span>*/}
                    </div>
                    <p className="lead">
                      SovereignWallet Network is a technology company specializing in secure application
                      development. The company holds core patents in self-protection technology and combines security
                      and artificial intelligence technology. HackFree is first application in the industry that has applied with built-in
                      self protection, end-to-end encryption, and zero-knowledge encryption. The major customers are government agencies and military organizations. We also provide application Sovereign Wallet, a secure chat
                      based CryptoCurrency E-Wallet that allows safely to trade Ethereum.
                    </p>
                    <div className="text-center">
                      <img src="img/company_logo.png" className="img-responsive aligncenter" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <div className="text-center" style={{marginBottom:50}}>
                        <h2>SovereignWallet Network</h2>
                        <span className="meta bottomspace30">Founded On <span className="bullet">•</span> January 20, 2018</span>
                      </div>
                      <h1 className="text-center smalltitle" style={{marginBottom: 70}}>
                        <span style={{backgroundColor:'#F6F6F6'}}>Member</span>
                      </h1>
                      <div className="col-md-6">
                        <div>
                          <img style={{borderRadius: 90, width:180}} className="img-responsive pull-left" src="img/member/yun.jpg" alt="" />
                        </div>
                        <div className="col-md-6">
                          <h2>Seokgu Yun</h2>
                          <span className="meta bottomspace30" style={{fontSize:20}}>Founder</span>
                          <p>
                            * KAIST, Electrical Engineering, BA
                          </p>
                          <p>
                            * University of Southern California, Computer Science ,MS
                          </p>
                          <p>
                            * 1994 ~ 1999 Samsung AIT, Research Staff
                          </p>
                          <p>
                            * 2000 ~ 2014 Teruten Inc. Founder and CEO
                          </p>
                          <p>
                            * 2017 ~ present. SovereignWallet Network Pte.Ltd CEO
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <img style={{borderRadius: 90, width:180, marginRight:50}} className="img-responsive pull-left" src="img/member/frannie.png" alt="" />
                        </div>
                        <div className="col-md-6">
                          <h2>Frances Kim</h2>
                          <span className="meta bottomspace30" style={{fontSize:20}}>Co-founder</span>
                          <p>
                            * University of Southern California, Phycology, BA
                          </p>
                          <p>
                            * University of Southern California, Organizational Behavior, MS
                          </p>
                          <p>
                            * SCU, Organizational Change & Development, Ph.D
                          </p>
                          <p>
                            * 2017 ~ present. SovereignWallet Network Pte.Ltd COO
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-center smalltitle" style={{marginBottom: 70}}>
                    <span style={{backgroundColor:'#F6F6F6'}}>History</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="container animated fadeInUpBig notransition">
            <div className="row">
              <div className="col-md-10">
                <ul className="cbp_tmtimeline">
                  <li>
                    <div className="cbp_tmicon">
                      <MdLocationCity style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2015.11</h2>
                      <p>
                        NODBiz Pte.Ltd 설립
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaClipboard style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2016.01</h2>
                      <p>
                        Registerd a patent for application self-protection
                        Filed a patent for application self-protection using system and user behavior analysis
                        Filed a PCT patent for seucre chatting with distributed key exchange protocol and application self-protection
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaClipboard style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2016.01</h2>
                      <p>
                        어플리케이션 자기보호 기술 특허 등록
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaClipboard style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2016.02</h2>
                      <p>
                        Registered a patent for application self-protection and system control.<br />
                        Registered a patent for distributed key exchange protocol and applicaiton self-protection.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaAngellist style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2016.11</h2>
                      <p>
                        대한민국 우수특허 대상 수상
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <MdPhoneAndroid style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2016.12</h2>
                      <p>
                        Privacy protection chat app, SPOT27 released
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaClipboard style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2017.01</h2>
                      <p>
                        채팅 어플리케이션의 작동 방법 특허 등록
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <MdPhoneAndroid style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2017.05</h2>
                      <p>
                        HackFree B2B Secure Chat released.<br />
                        글로벌 모바일 비전 2017 참가
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaMapMarker style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2017.09</h2>
                      <p>
                        Singapore Tech Innovation 2017 참가
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaMoney style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2017.10</h2>
                      <p>
                        10 million valuation Angel 투자 유치
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaDollar style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2017.11</h2>
                      <p>
                        MUI Token Free sale
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <FaExchange style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2018.01</h2>
                      <p>
                        SovereignWallet Network Pte.Ltd 법인명 변경
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <MdPhoneAndroid style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2018.02</h2>
                      <p>
                        SovereignWallet 출시 예정
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2018.06</h2>
                      <p>
                        MUI Token ICO 예정
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <MdDeveloperMode style={{height:40}} />
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>2018.12</h2>
                      <p>
                        SovereignWallet DEX 서비스 시작 예정
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}