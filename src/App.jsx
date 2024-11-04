/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import './Menu.css'
import Box from './atomic/Box';
import First from './atomic/First';

const Header = styled.header`
width: 100%;
height: 7vh;
background-color: #FFFFFF;
display: flex;
align-items: center;
gap: 10%;

> div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

p {
  white-space: nowrap;
  font-size: 25px;
  font-weight: bold;
}
`
const Logo_div = styled.a`
background-image: url("./img/logo.png");
background-position: center;
background-size: cover;
width: 150px;
height: 50px;
margin-left: 10%;
`
const Footer = styled.div`
white-space: nowrap;
background-color: #404740;
width: 100%;
height: 8vh;
display: flex;
justify-content: center;
gap: 800px;
align-items: center;
p{
  color: #DBDBDB;
}
> div {
  display: flex;
  > div{
    display: flex;
    gap: 150px;  
    >div{
      display: flex;
      gap: 50px;
    }
  }
}
  >div:nth-child(1){
    flex-direction: column;
  }
  >div:nth-child(2){
    gap: 20px;
  }
`
const Menu = styled.div`
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;
> div {
  > div{
    display: flex;
    flex-direction: column;
    align-items: end;
    > div:nth-child(1) {
      width: 110%;
      display: flex;
      align-items: center;
      > img {
        width: 45px;
        height: 45px;
      }
      > p {
        display: flex;
        align-items: center;
        width: 100%;
        height: 7vh;
        margin-left: 20px;
        padding-left: 35px;
        border-radius: 30px;
        font-size: 20px;
        font-weight: bold;
      }
    }
      > div:nth-child(2){
        display: flex;
        flex-direction: column;
        /* justify-content: right; */
        align-items: end;
        > p{
          color: white;
          font-weight: bold;
          font-size: 20px;
        }
      }
  }
}
`
const Firstcontent = styled.div`
display: flex;
position: relative;
align-items: center;
  > div:nth-child(1) {
    position: relative;
    margin-right: 100px;
    margin-left: 100px;
  }
  >div:nth-child(2){
    position: absolute;
    top: 0px;
    left: 0px;
    >img{
      vertical-align: baseline;
    }
    >img:nth-child(1){
      position: absolute;
      left: 145px;
      top: 0px;
      opacity: 0;
      z-index: 3;
    }
    >img:nth-child(2){
      position: absolute;
      left: 325px;
      top: 260px;
      opacity: 0;
      z-index: 1;
    }
    >img:nth-child(3){
      position: absolute;
      z-index: 3;
      left: 110px;
      top: 270px;
      opacity: 0;
    }
    >img:nth-child(1):hover{
      opacity: 1;
    }
    >img:nth-child(2):hover{
      opacity: 1;
    }
    >img:nth-child(3):hover{
      opacity: 1;
    }
  }
`
const Thirdcontent = styled.div`
  > div{
    display: flex;  
    flex-direction: column;
    align-items: center;
    >div:nth-child(1){
      width: 70vw;
      align-items: end;
      display: flex;
      justify-content: space-around;
      >div:nth-child(1){
        margin-bottom: 80px;
      }
      >div:nth-child(2){
        display: flex;
        height: fit-content;
      }
    }
    >div:nth-child(2){
      background-color: white;
      padding: 30px;
      border-radius: 20px;
      width: 90%;
      display: flex;
      > div {
        display: flex;
        img{
          width: 14vw;
          height: 45vh;
        }
        li{
          font-size: 20px;
          font-weight: bold;
          width: 19vw;
          margin-left: 50px;
          margin-bottom: 20px;
        }
      }
    }
  }
`
function Mainpage() {

const [$SecondcontentsImg, $setSecondcontentsImg] = useState(0)
const [$ThirdcontentsIndex, $setThirdcontentsIndex] = useState(0)
const [$MainBG , $setMainBG] = useState("./img/mainBg1.png")

const Secondcontentsarr = [
  { imgLink : "./img/자세히보기.png"},
  { imgLink : "./img/홍수조절자세히.png"},
  { imgLink : "./img/해안선자세히.png"},
  { imgLink : "./img/영양분자세히.png"},
  { imgLink : "./img/수질자세히.png"},
  { imgLink : "./img/생물종자세히.png"},
  { imgLink : "./img/생산적자세히.png"},
  { imgLink : "./img/여가활동자세히.png"},
  { imgLink : "./img/경제적자세히.png"},
]

const Thirdcontentarr = [
  { imgLink : "./img/에너지.png", text1 : [
    "난방온도 2℃ 낮추고 냉방온도 2℃  높이기",
    "전기밥통 보온기능 사용 줄이기",
    "냉장고 적정용량 유지하기",
    "비데 절전기능 사용하기",
    "물은 받아서 사용하기",
    "텔레비전 시청 시간 줄이기",
    "세탁기 사용횟수 줄이기",
    "디지털 탄소발자국 줄이기",
  ], text2 : [
    "창틀과 문틈 바람막이 설치하기",
    "가전제품 대기전력 차단하기",
    "정수 설비 또는 정수 기기 설치하기",
    "고효율 가전제품 사용하기",
    "친환경 콘텐싱 보일러 사용하기",
    "주기적으로 보일러 청소하기",
    "LED 조명으로 교체하기",
    "가정 내 지역난방배관 청소하기",
]},
  { imgLink : "./img/소비.png", text1 : [
    "음식물 쓰레기 줄이기",
    "저탄소 제품 구매하기",
    "저탄소 인증 농축산물 이용하기",
    "품질이 보증되고 오래 사용한 제품 사기",
  ], text2 : [
    "과대포장 제품 안 사기",
    "재활용하기 쉬운 재질·구조로 된 제품 구매하기",
    "우리나라, 우리 지역 식재로 이용하기",
  ]},
  { imgLink : "./img/수송.png", text1 : [
    "개인용 자동차 대신 대중교통 이용하기",
    "친환경 운전 실천하기",
    "자통차 타이어 공기압과 휠 정기적으로 점검하기",
  ], text2 : [
    "가까운 거리는 걷거나 자전거 이용하기",
    "전기 수소 자동차 구매하기",
]},
  { imgLink : "./img/자원순환.png", text1 : [
    "재활용을 위한 분리배출 실천하기",
    "종이타월, 행드드라이어 대신 개인손수건 사용하기",
    "장바구니 이용하고 비닐 사용 줄이기",
    "1회용 컵 대신 다회용 컵 사용하기",
  ], text2 : [
    "물티슈 덜 쓰기",
    "음식 포장 시 일회용품 줄이기",
    "인쇄 시 종이 사용 줄이기",
    "청구서, 영수증 등의 전자적 제공 서비스 이용하기",
]},
  { imgLink : "./img/흡수원.png", text1 : [
    "정부, 기업, 단체 등에서 추진하는 나무 심기 운동 참여하기",
    "탄소흡수원의 중요성을 알고 보호하기",
  ], text2 : [
    "기념일에 내(가족) 나무 심어보기",
  ]}
]

const Secondcontent = styled.div`
  display: flex;
  flex-direction: column;
  >div:nth-child(1){
    width: 90%;
    >p:nth-child(1){
      font-weight: bold;
      font-size: 30px;
    }
    > div{
        width: 1200px;
        height: 80px;
      >p{
        font-size: 25px;
      }
    }
  }
  > div:nth-child(2){
    margin-top: 20px;
    display: flex;
    >div{
      >div{
        display: flex;
      }
    }
    >div:nth-child(1){
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > p {
        font-size: 35px;
        font-weight: bold;
      }
      > div{
        width: 330px;
        height: 400px;
        background-image: url(${Secondcontentsarr[$SecondcontentsImg]["imgLink"]});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    }
    >div:nth-child(2){
      img{
        transition: 0.5s;
        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }
`

  const [FirstcontentsArr, setFirstcontentsArr] = useState({
    title : "한강하구1",
    location : "경기 고양시 김포대교 남단~강화군 송해면 숭뢰리 사이 하천제방과 철책선 안쪽(수면부 포함)",
    infor : "자연하구로 생물다양성이 풍부하여 다양한 생태계 발달",
    src : "graph.png"
  })
  const FirstcontentsEvent = (element) => {
      setFirstcontentsArr({
        title : first_contents[element]["title"],
        location : first_contents[element]["location"],
        infor : first_contents[element]["infor"],
        src : first_contents[element]["src"],
      })
      
      window.open(`https://expressdemoday.vercel.app/api/${first_contents[element]["title"]}`,'_blank','width=700, height=700, top=50, left=50, scrollbars=yes')
      
  }
  const SecondcontentsEvent = (idx) => {
    $setSecondcontentsImg(idx) 
  }
  
const Main = styled.div`
background-image: url(${$MainBG});
background-position: center;
width: 100%;
height: 85vh;
display: flex;
justify-content: space-around;
align-items: center;
`

  const first_contents = {
    "한강하구1" : {
      title : "한강하구1",
      location : "경기 고양시 김포대교 남단~강화군 송해면 숭뢰리 사이 하천제방과 철책선 안쪽(수면부 포함)",
      infor : "자연하구로 생물다양성이 풍부하여 다양한 생태계 발달",
      src : "graph.png"

    },
    "한강하구2" : {
      title : "한강하구2",
      location : "경기 고양시 김포대교 남단~강화군 송해면 숭뢰리 사이 하천제방과 철책선 안쪽(수면부 포함)",
      infor : "자연하구로 생물다양성이 풍부하여 다양한 생태계 발달",
      src : "graph.png"
    },
    "고창운곡습지" : {
      title : "운곡습지",
      location : "운곡 람사르 습지 전북특별자치도 고창군 아산면 운곡리",
      infor : "과거 계단식 논 경작지였으나 폐경 등으로 인해 자연적 천이과정을 거쳐 습지생태계로 복원되었습니다.",
      src : "고창운곡습지그래프.png"
    },
    "물장오리" : {
      title : "물장오리",
      location : "제주특별자치도 제주시 봉개동 산 78-38",
      infor : "장오리라는 이름이 붙은 네 개(물장오리, 테역장오리, 살손장오리, 불칸장오리 등)의 오름 가운데",
      src : "물장오리오름습지그래프.png"
    },
    "경포호" : {
      title : "경포호",
      location : "강원특별자치도 강릉시 저동 94",
      infor : "자연하구로 생물다양성이 풍부하여 다양한 생태계 발달",
      src : "경포호그래프.png"
    },
    "월영한반도습지" : {
      title : "영월한반도습지",
      location : "강원특별자치도 영월군 한반도면 한반도로 555",
      infor : "수달, 돌상어, 묵납자루 등 총 8종의 법정 보호종 서식",
      src : "영월한반도습지그래프.png"
    },
    "장도습지" : {
      title : "장도습지",
      location : "전라남도 신안군 흑산면 비리",
      infor : "도서지역 최초의 산지습지",
      src : "장도습지그래프.png"
    },
  }

  const [clickedIndex, setClickedIndex] = useState(0); // 클릭된 요소의 인덱스를 저장

  const handleClick = (index) => {
    setClickedIndex(index); // 클릭된 요소의 인덱스를 저장
    if(index === 1){  
      $setMainBG("./img/body2.png")
    }else if(index === 2){
      $setMainBG("./img/body3.png")
    }else{
      $setMainBG("./img/mainBg1.png")
    }
  };

  const items = [
    { id: 1, label: "습지 현황 지도", contentLink : "./img/dashborad.png", contentText : "지도로 보는 대한민국 습지 현황"},
    { id: 2, label: "습지정보", contentLink : "./img/marsh.png", contentText : "습지의 정의와 습지의 가치"},
    { id: 3, label: "탄소중립 실천방안", contentLink : "./img/carbon neutral.png", contentText : "직접 실천하는 탄소중립"}
  ];
  return (
    <>
    <Header>
      <Logo_div href='#'></Logo_div>
      <div>
        <p>습지 현황 지도</p>
        <p>습지정보</p>
        <p>탄소중립 실천방안</p>
      </div>
    </Header>
    <Main>
      <Menu>
        <div>

        {items.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleClick(index)} // 클릭 시 해당 인덱스를 전달
          style={{
            cursor: 'pointer',
            margin: '10px',
            padding: '10px',
          }}
        >
          <div>
            <img
              src={clickedIndex === index ? './img/minus.png' : './img/plus.png'}
              alt="status icon"
            />
            <p
              style={{
                backgroundColor: clickedIndex === index ? 'black' : 'white',
                color: clickedIndex === index ? 'white' : 'black',
              }}
            >
              {item.label}
            </p>
          </div>

          <CSSTransition
            in={clickedIndex === index} // clickedIndex가 해당 index와 일치할 때만 활성화
            timeout={300}
            classNames="dropdown"
            unmountOnExit
          >
            <div className="dropdown">
              <img src={item.contentLink} alt={item.label}/>
              <p>{item.contentText}</p>
            </div>
          </CSSTransition>
        </div>
      ))}
        </div>
      </Menu>
      <div>
        {clickedIndex === 0 ? (
          <Firstcontent>
            <div>
              <img src="./img/firstbg.png" alt="#" />
              <Box box_left="180px" box_top="50px" box_position="column" box_text="철원 용양보" onClick={() => FirstcontentsEvent('철원용양보')} />
              <Box box_left="380px" box_top="140px" box_position="column" box_text="경포호" onClick={() => FirstcontentsEvent('경포호')} />
              <Box box_left="290px" box_top="50px" box_position="column-reverse" box_text="대암산용늪" onClick={() => FirstcontentsEvent('대암산용늪')} />
              <Box box_left="360px" box_top="80px" box_position="row" box_text="가평리습지" onClick={() => FirstcontentsEvent('가평리습지')} />
              <Box box_left="370px" box_top="95px" box_position="row" box_text="쌍호" onClick={() => FirstcontentsEvent('쌍호')} />

              <Box box_left="100px" box_top="155px" box_position="row" box_text="한강하구" onClick={() => FirstcontentsEvent('철원용양보')} />
              <Box box_left="10px" box_top="165px" box_position="column" box_text="옹진장봉도갯벌" onClick={() => FirstcontentsEvent('')} />
              <Box box_left="100px" box_top="190px" box_position="column" box_text="시흥갯벌 " onClick={() => FirstcontentsEvent('대암산용늪')} />
              <Box box_left="20px" box_top="320px" box_position="row" box_text="두웅습지" onClick={() => FirstcontentsEvent('가평리습지')} />
              <Box box_left="100px" box_top="135px" box_position="row" box_text="고양 자향습지" onClick={() => FirstcontentsEvent('쌍호')} />

                
              <Box box_left="250px" box_top="280px" box_position="row" box_text="충주 비내섬" onClick={() => FirstcontentsEvent('철원용양보')} />
              <Box box_left="220px" box_top="320px" box_position="row" box_text="대전갑천" onClick={() => FirstcontentsEvent('')} />
              <Box box_left="300px" box_top="340px" box_position="row" box_text="문경돌리네" onClick={() => FirstcontentsEvent('대암산용늪')} />
              <Box box_left="150px" box_top="340px" box_position="column-reverse" box_text="대청호추동습지" onClick={() => FirstcontentsEvent('가평리습지')} />
              <Box box_left="280px" box_top="370px" box_position="row" box_text="상주공검지" onClick={() => FirstcontentsEvent('쌍호')} />
                
              <Box box_left="90px" box_top="500px" box_position="row" box_text="부안줄포만갯벌" onClick={() => FirstcontentsEvent('철원용양보')} />
              <Box box_left="10px" box_top="520px" box_position="row-reverse" box_text="고창갯벌" onClick={() => FirstcontentsEvent('')} />
              <Box box_left="150px" box_top="520px" box_position="row" box_text="정음월영습지" onClick={() => FirstcontentsEvent('대암산용늪')} />
              <Box box_left="0px" box_top="545px" box_position="row-reverse" box_text="고창운곡습지" onClick={() => FirstcontentsEvent('고창운곡습지')} />
              <Box box_left="125px" box_top="580px" box_position="row" box_text="담양하천습지" onClick={() => FirstcontentsEvent('쌍호')} />

              <Box box_left="200px" box_top="550px" box_position="row" box_text="섬진강 침실습지" onClick={() => FirstcontentsEvent('철원용양보')} />
              <Box box_left="350px" box_top="550px" box_position="column" box_text="감해 화포천" onClick={() => FirstcontentsEvent('')} />
              <Box box_left="200px" box_top="600px" box_position="row-reverse" box_text="경남 고성 마동호" onClick={() => FirstcontentsEvent('대암산용늪')} />
              <Box box_left="330px" box_top="500px" box_position="row" box_text="대구달성하천습지" onClick={() => FirstcontentsEvent('가평리습지')} />
              <Box box_left="450px" box_top="540px" box_position="row" box_text="화염늪" onClick={() => FirstcontentsEvent('쌍호')} />
                
              <Box box_left="350px" box_top="250px" box_position="row" box_text="월영 한반도 습지" onClick={() => FirstcontentsEvent('월영한반도습지')} />
              <Box box_left="40px" box_top="450px" box_position="row-reverse" box_text="서천갯벌" onClick={() => FirstcontentsEvent('')} />
              <Box box_left="410px" box_top="710px" box_position="column" box_text="물장오리" onClick={() => FirstcontentsEvent('물장오리')} />
              <Box box_left="30px" box_top="700px" box_position="row" box_text="신안 장도 산지습지" onClick={() => FirstcontentsEvent('장도습지')} />
              <Box box_left="100px" box_top="650px" box_position="row-reverse" box_text="순천 동천하구" onClick={() => FirstcontentsEvent('쌍호')} />
            </div>
            <div>
              </div>
            <First title={FirstcontentsArr.title} location={FirstcontentsArr.location} infor={FirstcontentsArr.infor} src={FirstcontentsArr.src}/>
          </Firstcontent>
        ) : null}
        {clickedIndex === 1 ? (
          <Secondcontent>
            <div>
              <p>습지란?</p>
              <div>
                <p>습지(濕地, wetland)는 영구적 혹은 일시적으로 습윤한 상태를 유지하고 그러한 환경에 적응된 식생이 서식하는 장소를 의미합니다.</p>  
              </div>
            </div>
            <div>
              <div>
                <p>습지의 가치</p>
                <div></div>
              </div>
              <div>
                <div>
                  <div><img src="./img/홍수조절의기능.png" alt="#" onClick={() => SecondcontentsEvent(1)} /></div>
                  <div><img src="./img/해안선안정화및폭풍방지.png" onClick={() => SecondcontentsEvent(2)}  alt="#" /></div>
                  <div><img src="./img/영양분과먹이공급.png" onClick={() => SecondcontentsEvent(3)}  alt="#" /></div>
                  <div><img src="./img/수질정화.png" alt="#" onClick={() => SecondcontentsEvent(4)}  /></div>
                </div>
                <div>
                  <div><img src="./img/생물다양성유지.png" onClick={() => SecondcontentsEvent(5)}  alt="#" /></div>
                  <div><img src="./img/생산적기능.png" onClick={() => SecondcontentsEvent(6)}  alt="#" /></div>
                  <div><img src="./img/여가활동과관광.png" onClick={() => SecondcontentsEvent(7)}  alt="#" /></div>
                  <div><img src="./img/경제적가치.png" onClick={() => SecondcontentsEvent(8)}  alt="#" /></div>
                </div>
              </div>
            </div>
          </Secondcontent>
        ) : null}
        {clickedIndex === 2 ? (
          <Thirdcontent>
            <div>
              <div>
                <div><img src="./img/thridTitle.png" alt="#" /></div>
                <div>
                  <div><img src="./img/energyIcon.png" alt="#" onClick={() => $setThirdcontentsIndex(0)}/></div>
                  <div><img src="./img/consumptionIcon.png" alt="#" onClick={() => $setThirdcontentsIndex(1)}/></div>
                  <div><img src="./img/transportIcon.png" alt="#" onClick={() => $setThirdcontentsIndex(2)}/></div>
                  <div><img src="./img/resourceIcon.png" alt="#" onClick={() => $setThirdcontentsIndex(3)}/></div>
                  <div><img src="./img/sinkIcon.png" alt="#" onClick={() => $setThirdcontentsIndex(4)}/></div>
                </div>
              </div>
              <div>
                <div><img src={Thirdcontentarr[$ThirdcontentsIndex]["imgLink"]} alt="#" /></div>
                <div>
                  <div>
                    {Thirdcontentarr[$ThirdcontentsIndex]["text1"].map((el, idx) => (
                      <li key={idx}>{el}</li>
                    ))}
                  </div>
                  <div>
                    {Thirdcontentarr[$ThirdcontentsIndex]["text2"].map((el, idx) => (
                      <li key={idx}>{el}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Thirdcontent>
        ) : null}
      </div> 
    </Main>
    <Footer>
      <div>
        <div>
          <div><p>대표자:이선우</p></div>
          <div>
            <p>e-mail : sdh230310@sdh.hs.kr</p>
            <p>TEAM:ASMR</p>
          </div>
        </div>
        <div>
          <p>Copyright © ASMR. All rights reserved.</p>
        </div>
      </div>
      <div>
        <p>습지 현황 지도</p>
        <p>습지정보</p>
        <p>탄소중립 실천방안</p>
      </div>
    </Footer>
    </>
  )
}

export default Mainpage
