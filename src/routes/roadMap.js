import React from 'react';

export default class RoadMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginBottom:80}}>
        <section className="pageheader-default text-center" style={{marginBottom:10}}>
          <div className="semitransparentbg">
            <h1 className="animated fadeInLeftBig notransition">RoadMap</h1>
            <p className="animated fadeInRightBig notransition container page-description">
              SovereignWallet Technology Roadmap
            </p>
          </div>
        </section>

        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="img/shp.png" className="img-responsive" alt="" />
          </div>

          <section className="grayarea animated fade notransition recent-projects-home text-center topspace30" style={{marginBottom:50}}>
            <div className="container">
              <div className="row">
                <img src="img/roadmap.png" style={{height:400}} />
              </div>
            </div>
          </section>

          <section className="container animated fadeInUpBig notransition">
            <div className="row">
              <div className="col-md-12">
                <ul className="cbp_tmtimeline">
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>Post-Quantum Cryptography</h2>
                      <p>
                      New cryptographic primitives to resist against quantum attack
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>Post-Quantum Crypto Library</h2>
                      <p>
                      Functional Cryptographic Library based on post-quantum cryptographic algorithm
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>Quantum-Resistant BlockChain</h2>
                      <p>
                      New BlockChain based on Post-Quantum Cryptographic Algorithm
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>ZK Crypto Currency</h2>
                      <p>
                      Zero-Knowledge Cryptocurrency based on Quantum-Resistant BlockChain
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>Multi-Cryptocurrency Wallet</h2>
                      <p>
                      Multi-Cryptocurrency wallet including our own ZK Crypto Currency
                      </p>
                      </div>
                  </li>
                  <li>
                    <div className="cbp_tmicon">
                      <img src="img/token.png" style={{height:40}}/>
                    </div>
                    <div className="cbp_tmlabel">
                      <h2>P2P D-Money Transfer and Decentralized Token Exchange</h2>
                      <p>
                      Secure Person to Person direct D-money Transfer and Exchange with ZK crypto currency in end-to-end encrypted channel
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
