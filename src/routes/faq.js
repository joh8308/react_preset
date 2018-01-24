import React from 'react';

/* icon */


export default class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginBottom:80}}>
        <section className="pageheader-default text-center" style={{marginBottom:10}}>
          <div className="semitransparentbg">
            <h1 className="animated fadeInLeftBig notransition">이런 경우엔 어떻게 해야하나요?</h1>
            <p className="animated fadeInRightBig notransition container page-description">
              자주하는 질문
            </p>
          </div>
        </section>
        <div className="wrapsemibox">
          <div className="semiboxshadow text-center">
            <img src="img/shp.png" className="img-responsive" alt="" />
          </div>
          <section className="container animated fadeInUp notransition">
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tags faqsicon"></span> 1. 보안이 어떤식으로 진행되나요?</h1>
                <dl className="faqs">
                  <dt>Sovereign Waalet에서는 사용자정보 및 모든 메세지, 파일암호화가 되고 있습니다. 올바른 정보로 로그인되지 않았다면 저희 개발자들도 내용을 확인할 수 없습니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-flag faqsicon"></span> 2. 다운로드는 어떻게 하나요?</h1>
                <dl className="faqs">
                  <dt>안드로이드, iOS 모두 각각 App store, Google play에서 결제 후 설치가 가능합니다. 위에 아이콘을 클릭하시면 설치 링크로 이동하실 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 3. 메시지를 잘못 입력했어요</h1>
                <dl className="faqs">
                  <dt>채팅방에서는 언제나 지우고 싶은 메세지를 회수할 수 있습니다. 메세지 유지시간이 경과하면 모든 내용이 채팅방은 물론 서버에도 남지 않습니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 4. MUI는 어떻게 구매할 수 있나요?</h1>
                <dl className="faqs">
                  <dt>SoverienWallet의 GET MUI 기능을 통해 이더리움으로 MUI를 구매하실 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 5. 친구의 지갑 주소를 알아야만 MUI를 전송할 수 있나요?</h1>
                <dl className="faqs">
                  <dt>친구 정보를 클릭하시면 SoverienWallet의 MUI Transfer 기능을 통해 주소를 입력할 필요없이 MUI를 전송할 수 있습니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 6. 계정을 삭제하면 제가 가지고있는 MUI와 이더리움은 사라지나요?</h1>
                <dl className="faqs">
                  <dt>네, 계정과 함께 주소가 삭제되므로 가지고 계시던 MUI와 이더리움은 모두 사라집니다.</dt>
                </dl>
              </div>
            </div><div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 7. 계정을 삭제하면 복구할 수 있는 방법이 있나요?</h1>
                <dl className="faqs">
                  <dt>삭제한 계정은 복구가 불가능하나 계정에 등록되있던 Address는 PrivateKey를 백업해놓았다면 재사용이 가능합니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 8. QR 코드 스캔기능이 궁금해요</h1>
                <dl className="faqs">
                  <dt>외부에 있는 QR코드를 스캔하면 SoverienWallet의 ETH Transfer 기능에 이더리움 주소가 자동으로 복사되어집니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 9. 채팅중 보낸 사진을 다운로드할 수 있나요?</h1>
                <dl className="faqs">
                  <dt>채팅방 이미지 메시지는 크게 보기는 가능하나 다운로드는 불가능합니다</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 10. 구입한 MUI는 환불이 되나요?</h1>
                <dl className="faqs">
                  <dt>구입한 MUI는 이더리움으로 환불할 수 없습니다. </dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 11. Import Address 기능은 어떤 기능인가요? </h1>
                <dl className="faqs">
                  <dt>Sovereign Wallet과 연동하고 싶은 주소의 Private Key를 입력하여 계좌를 사용하실 수 있습니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 12. MUI토큰 보유 현황은 어디에서 확인할 수 있나요?</h1>
                <dl className="faqs">
                  <dt>Sovereign Wallet의 Wallet 탭에서 현재 MUI와 ETH의 보유 현황을 확인할 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 13. MUI토큰 발행총량과 정확한 분배를 알고 싶어요. </h1>
                <dl className="faqs">
                  <dt>MUI토큰 발행 총량은 10억 토큰입니다. 자세한 사항은 화이트 페이퍼를 참고하세요.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 14. ICO는 무엇인가요?</h1>
                <dl className="faqs">
                  <dt>일종의 IPO(기업공개) 혹은 클라우드펀딩과 같은 의미로 이해 하시면 됩니다. 다만 투자를 현물화폐가 아닌 가상화폐로 할 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 15. MUI는 무엇인가요? </h1>
                <dl className="faqs">
                  <dt>MUI는 집시들이 부와 풍요를 기원하고 자신의 신변을 지키기 위해 목걸이 형식으로 가공한 부적입니다. SovereiegnWallet Network안의 MUI는
                    강력한 암호화 모듈이 내장되어있어 당신의 MUI는 외부의 위협으로부터 안전할 것입니다. </dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 16. ETH를 거래소 지갑에서 보내도 되나요?</h1>
                <dl className="faqs">
                  <dt>네. 자신의 Sovereign Wallet 주소로 ETH를 송금할 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 17. 거래내역 확인은 어디서 하나요? </h1>
                <dl className="faqs">
                  <dt>Sovereign Wallet의 Check on Etherscan.io 기능을 이용하여 거래내역을 확인할 수 있습니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 18. 외부 거래소로 ETH를 전송하고 싶어요.</h1>
                <dl className="faqs">
                  <dt>Sovereign Wallet의 ETH Transfer 기능을 이용하여 주소 입력후 전송할 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 19. ETH Gas Fee는 얼마인가요? </h1>
                <dl className="faqs">
                  <dt>ETH의 Gas Fee는 40GWei 입니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 20. ETH 전송시 Sovereign Wallet에게 Service Fee를 내야하나요?</h1>
                <dl className="faqs">
                  <dt>네. ETH 전송시 지불되는 Service Fee 는 0.001ETH 입니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 21. MUI Gas Fee는 얼마인가요? </h1>
                <dl className="faqs">
                  <dt>MUI의 Gas Fee는 4GWei 입니다.</dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 22. MUI 전송시 Sovereign Wallet에게 Service Fee를 내야하나요?</h1>
                <dl className="faqs">
                  <dt>아직 정해진 사항이 없습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 23. 비밀번호를 잃어버리면 어떻게 하나요? </h1>
                <dl className="faqs">
                  <dt>로그인 버튼 우측 하단의 Find Password에서 이메일과 핸드폰번호 입력 후 발송된 이메일로 비밀번호를 재설정할 수 있습니다. </dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 24. 핀번호를 잃어버리면 어떻게 하나요?</h1>
                <dl className="faqs">
                  <dt>잘못된 핀번호 입력시 뜨는 팝업창의 Reset 버튼을 클릭하여 계정 비밀번호를 입력 후 핀번호를 변경할 수 있습니다.</dt>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tasks faqsicon"></span> 25. ETH를 실수로 잘못 보냈습니다. 환불해줄 수 있나요? </h1>
                <dl className="faqs">
                  <dt>CryptoCurrency 의 지불방식은 실수로 지불된 화폐를 환불할 수 없습니다. </dt>
                </dl>
              </div>
              <div className="col-md-6">
                <h1 className="faqstitle"><span className="icon-tint faqsicon"></span> 26. MUI를 실수로 잘못 보냈습니다. 환불해줄 수 있나요? </h1>
                <dl className="faqs">
                  <dt>CryptoCurrency 의 지불방식은 실수로 지불된 화폐를 환불할 수 없습니다. </dt>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
