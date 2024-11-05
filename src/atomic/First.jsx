import styled from "styled-components"


const Contents = styled.div`
width: fit-content;
height: fit-content;
display: flex;
background-color: white;
border-radius: 30px;
align-items: center;
justify-content: center;
flex-direction: column;
> div {
  padding-top: 25px;
  padding-left: 20px;
}
> div:nth-child(1) {
  > p{
    display: flex;
    align-items: center;
    width: 500px;
    font-size: 40px;
    font-weight: bold;
  }
  > p::before{
      content: "";
      display: block;
      background-image: url("./img/flower.png");
      background-position: center;
      background-size: cover;
      width: 2vw;
      height: 5vh;
      margin-right: 20px;
      margin-left: 10px;
    }
}
> div:nth-child(1)::after{
  content: "";
  padding-bottom: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border-bottom: 4px solid black;
  width: 470px;
}
> div:nth-child(2){
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 500px;
    > p {
      width: 430px;
      font-weight: bold;
    }
    > p:nth-child(1){
      display: flex;
      font-size: 20px;
    }
    > p:nth-child(2){
      font-size: 20px;
      margin-left: 25px;
      margin-bottom: 30px;
    }
  }
  > div:nth-child(1){
    > p:nth-child(1)::before{
      content: url("./img/lotus flower.png");
    }
  }
  > div:nth-child(2){
    > p {
      margin-top: 10px;
    }
    > p:nth-child(1)::before{
      display: block;
      content: url("./img/location.png");
    }
  }
  > div:nth-child(3){
    > p:nth-child(2){
      margin-top: 10px;
    }
    > p:nth-child(1)::before{
      content: url("./img/document.png");
    }
  }
  > div{
    > p:nth-child(1)::before{
      padding-right: 10px;
      padding-left: 10px;
    }
  }
  img{
    width: 400px;
    height: 200px;
  }
  > div:nth-child(1){
    >div{
      display: flex;
      justify-content: center;
    }
  }
}
`

const First = (props) => {


    return(
        
        <Contents>
            <div>  
            <p>{props.title}</p>
            </div>
            <div>
                <div>
                    <p>습지 면적의 변화</p>
                    <div>
                      <img src={`./img/${props.src}`} alt="#" />
                    </div>
                </div>
                <div>
                    <p>위치</p>
                    <p>{props.location}</p>
                </div>
                <div>
                    <p>정보</p>
                    <p>{props.infor}</p>
                </div>
            </div>
        </Contents>
    )
}

export default First