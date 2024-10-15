import styled from 'styled-components';

function App() {

  const Header = styled.header`
    width: 100%;
    height: 80px;
    border: 1px solid black;
  `
  const Logo_div = styled.div`
    background-color: #D9D9D9;
    height: 20px;
    width: 20px;
  `
  const Main = styled.div`
    background-color: blue;
    width: 100%;
    height: 750px;
  `
  const Footer = styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 70px;
  `
  return (
    <>
    <Header>
      <Logo_div>

      </Logo_div>
    </Header>
    <Main>
      <img src="./image 2 (2).png" alt="#" />
    </Main>
    <Footer></Footer>
    </>
  )
}

export default App
