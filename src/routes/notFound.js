import React from 'react';
import {browserHistory} from 'react-router';

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePath = (path) => {
    browserHistory.push(path);
  }

  render() {
    return (
      <div style={{marginBottom:80}}>
        <section className="pageheader-default text-center" style={{marginBottom:10}}>
          <div className="semitransparentbg">
            <h1 className="animated fadeInLeftBig notransition">Not Found</h1>
            <p className="animated fadeInRightBig notransition container page-description">
              SovereignWallet Network
            </p>
          </div>
        </section>
        <div className="wrapsemibox" style={{paddingTop:80,paddingBottom:150}}>
          <div className="semiboxshadow text-center">
            <img src="img/shp.png" className="img-responsive" alt="" />
          </div>

          <section className="page-not-found">
            <div className="row">
              <div className="col-md-12 text-center topspace50 bottomspace50">
                <h2 className="pagenotfound animated fadeInDownBig notransition"><img src="img/exclamation4.png" style={{height:80, marginBottom:20}} /><br /> "현재 페이지 준비중입니다."</h2>
                <p clclassNameass="lead">
                  Sovereign Wallet 홈페이지를 방문해주셔서 진심으로 감사드립니다. <br />
                  현재 페이지를 준비하고 있으니 조금만 기다려 주세요. <br />
                  더욱 나은 모습으로 찾아뵙겠습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="container animated notransition topspace40">
            <div className="row">
              <div className="col-md-12">
                <div onClick={()=>this.handlePath('/')} className="text-center topspace20">
                  <a className="buttoncolor">&nbsp; Home</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
