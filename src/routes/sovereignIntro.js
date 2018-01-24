import React from 'react';
/*icons*/
import MdPerson from 'react-icons/lib/md/person';
import MdError from 'react-icons/lib/md/error';

export default class SovereignIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

  <section className="pageheader-default text-center">
  <div className="semitransparentbg">
    <h1 className="animated fadeInLeftBig notransition">Introduction</h1>
    <p className="animated fadeInRightBig notransition container wowbreadcr">
       소브린 커뮤니티 소개
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


        <div className="row" style={{margin:30}}>
          <div className="col-md-12">

           <div className="img-responsive pull-left" style = {{marginLeft:30, marginRight:30, marginBottom:30, height:500}}>
            <img  src="img/coin_back.png" style = {{width:200, borderRadius:20}} alt="" /><br/><br/>  
            <img src="img/coin.png" style = {{width:200, borderRadius:20}}  alt="" />
          </div>


          <h3 className="panel" style={{color:'#3A3B4C',backgroundColor:'white',width:'50%',marginLeft:250}} >525년 전통의 주화, 소브린 금화의 역사</h3>
          <br/>
        

            <p>
영국에서 발행한 최초의 1파운드 금화인 소브린은 주권 혹은 통치권이라는 뜻이며
소브린은 영국 왕실의 명예와 전통, 존엄을 상징하는 금화입니다.
영국인들에게 왕실은 급변하는 세계 속에서 안정성과 연속성의 상징으로 남아 있으며 영국의 구심점으로 사랑과 존경을 받고 있습니다.
이와 더불어 소브린 금화는 말 그대로 영국 왕실을 상징하는 금화로써 그 또한 변치 않는 가치 그 자체를 의미하고 있습니다.
            </p>

            <br/>


            <h3 className="panel" style={{color:'#3A3B4C',backgroundColor:'white',width:'50%',marginLeft:250}}>소브린 커뮤니티란?</h3>
            <br/>
            <p>
              SovereignWallet Network Pte Ltd에서는 MUI 코인 탄생을 기념하여 1000 MUI 의 가치를 지니는 한정된 100개의 소브린 금화를 발행합니다. 암호화폐 시장에서 최초로 발행되는 실물 금화입니다. 발행 개수가 한정되어 희소성이 있습니다. 해당 금화를 보유한 사람들은 Sovereign Community 회원이 됩니다. Sovereign Community 회원은 SovereignWallet Network의 중요 뉴스, 행사, 파티 등에 참가할 자격이 주어집니다.
            </p>  


            <br/>
            <h3 className="panel" style={{color:'#3A3B4C',backgroundColor:'white',width:'50%',marginLeft:250}}>누가 소브린 커뮤니티의 회원이 될 수 있는가?</h3>
            <br/>
            <p style={{fontSize:15, marginLeft:250}}>
             <ul style={{listStyle:'none'}}>
                <li><MdPerson/> Founder & co-founder</li>
                <li><MdPerson/> Advisor</li>
                <li><MdPerson/> Developer</li>
                <li><MdPerson/> Royal Investor</li>
              </ul>


            </p>

        <h3 style={{color:'#3A3B4C',marginLeft:250}} className="smalltitle">
        <span style={{backgroundColor:'#F6F6F6'}}>FAQ</span>
        </h3>
            <br/>
            <p>
              <ul style={{listStyle:'none',marginLeft:250}}>
                <li><MdError/> 소브린 금화는 지명된 사람이 오직 한개의 금화만 보유할 수 있습니다.</li>
                <li><MdError/> 소브린 금화는 원칙적으로 양도가 불가능 하나 부득이하게 양도를 해야 할 경우에는 SovereignWallet Network에 신고하고 Consensus Protocol 을 거쳐 신분이 확인된 사람에게만 이전 됩니다.</li>
                <li><MdError/> 소브린 금화 소유자는 SovereignWallet Network에 금화를 반납할 수 있으며 1000 MUI 로 언제든지 교환할 수 있습니다. 반납된 금화는 재발행이 불가합니다.</li>
              </ul>
            </p>

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