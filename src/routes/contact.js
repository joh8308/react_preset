import React from 'react';
/*icon*/
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
    


  <section className="pageheader-default text-center">
  <div className="semitransparentbg">
    <h1 className="animated fadeInLeftBig notransition">Contact</h1>
    <p className="animated fadeInRightBig notransition container page-description">

    </p>
  </div>
  </section>


  <div>

    <div className="semiboxshadow text-center">
      <img src="img/shp.png" className="img-responsive" alt="" />
    </div>

    <iframe className="gmap" style={{width:'100%', height:370, border: 0, marginTop:-40, zIndex: 1, position: 'relative'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.823953424221!2d103.85212860072659!3d1.2792146490624152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190e334a518f%3A0xcad303181bf53c50!2sMBFC+Tower+3!5e0!3m2!1sko!2skr!4v1516264493678">
    </iframe>

    <section className="container">
    <div className="row">
      
Address 
12 Marina Boulevard #17-01 MarinaBayFinancial Centre(MBFC) Tower 3 Singapore 018982

Phone: + 65 6809 5199

Fax: + 65 6809 5001

Email: support@nod-bizware.com

      
    </div>
    </section>

  </div>


      </div>
  );
  }
  }
