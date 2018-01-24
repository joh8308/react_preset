import React from 'react';

/* icon */


export default class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

  <section className="pageheader-default text-center">
  <div className="semitransparentbg">
    <h1 className="animated fadeInLeftBig notransition">TEAM</h1>
    <p className="animated fadeInRightBig  notransition container page-description">
       SovereignWallet Network 의 팀원을 소개합니다.
    </p>
  </div>
  </section>
  <div>
    <div className="semiboxshadow text-center">
      <img src="img/shp.png" className="img-responsive" alt="" />
    </div>

    
    <section className="container animated fadeInDown notransition topspace10">

    <div className="row">
      <h1 className="text-center smalltitle">
      <span style={{backgroundColor:'#F6F6F6'}}>Team</span>
      </h1>


      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://www.wowthemes.net/demo/calypso/img/demo/team1.jpg" alt="" />
          <div className="caption">
            <h4>Seokgu Yun</h4>
            <span className="primarycol">- CEO -</span>
            <p>
               USC Computer Science MS<br/>
               KAIST EECS BA<br/>
               Stanford GSB SEIT Course<br/>
               Tel Aviv Univ. EIA Program<br/>
               <br/>
               Secure Software Design<br/>
               Cryptographic Design<br/>
            </p>

          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://www.wowthemes.net/demo/calypso/img/demo/team2.jpg" alt="" />
          <div className="caption">
            <h4>Frances Kim</h4>
            <span className="primarycol">- COO -</span>
            <p>
               SCU Organizational<br/>
               Behavior Ph.D<br/>
               USC Psychology BA<br/>
               <br/>
               <br/>
               Global Marketing<br/>
               Investor Relation<br/>
            </p>

          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="thumbnail">
          <img src="http://www.wowthemes.net/demo/calypso/img/demo/team3.jpg" alt="" />
          <div className="caption">
            <h4>Alex Cho</h4>
            <span className="primarycol">- CMO -</span>
            <p>
               Parsons MA<br/>
               Hongik University<br/>
               Engineering BE<br/>
               <br/>
               <br/>
               Marketing<br/>
               Business Partnership<br/>
            </p>

          </div>
        </div>
      </div>
    </div>

      <h1 className="text-center smalltitle">
        <span style={{backgroundColor:'#F6F6F6'}}>Advisor</span>
      </h1>
        <div className="row">

      <div className="col-md-4">
        <div className="thumbnail">
          <div className="caption">
            <h4>JungHee Cheon</h4>
            <span className="primarycol">- Crypto Technology Advisor -</span>
            <p>
               KAIST Mathematics MS, Ph.D<br/>
               <br/>
               Director of Quantum Cryptography<br/>
               Research Center, SNU<br/>
               Prof. of Seoul National University<br/>
               Program director of PQC Asia Forum<br/>
               Best paper award in Eurocrypt 2015<br/>
            </p>

          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="thumbnail">
          <div className="caption">
            <h4>DaeKyun Yoon</h4>
            <span className="primarycol">- Technical Advisor -</span>
            <p>
               USC Computer Science Ph.D<br/>
               SNU Computer Eng. BE, ME<br/>
               <br/>
               Professor, Aju University<br/>
               Director, Samsung Electronics<br/>
               CEO, NHN Technology Services<br/>
            </p>
            <br/>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="thumbnail">
          {/*<img src="http://www.wowthemes.net/demo/calypso/img/demo/team3.jpg" alt="" />*/}
          <div className="caption">
            <h4>KyungHan Lee</h4>
            <span className="primarycol">- Marketing Advisor -</span>
            <p>
               USC MBA<br/>
               SNU Mathematics BA<br/>
               <br/>
               CEO, DoubleH<br/>
               CEO, Yahoo Korea (Overture Korea)<br/>
               Director, Samsung SDS<br/>
            </p>
            <br/>
          </div>
        </div>
      </div>
    </div>



    </section>
  

  </div>
      </div>
    );
  }
}