import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0px;
top: 0px;
background: linear-gradient(180deg, rgba(227, 255, 248, 0.00) 82.08%, rgba(227, 255, 248, 0.38) 100%);

width: 1280px;
height: 720px;


> header {
    display: flex;
    flex-direction: row;
    width: 1005.79px;
    height: 26px;

    h1{
    margin-top: 65px;
    margin-left: 122.1px;
    display: flex;
    width: 103.08px;
    height: 26px;
    margin-top: 65px;
    margin-left: 122.1px;
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: #89C5CC;
    }

    a:nth-child(2){
    text-decoration: none;
    width: 51.04px;
    height: 23px;
    margin-left: 620.67px;
    margin-top: 65px;
    color: #1F1534;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }
    a:nth-child(3){
    text-decoration: none;
    width: 51.04px;
    height: 23px;
    margin-top: 65px;
    margin-left: 48.04px;
    color: #1F1534;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }
    a:nth-child(4){
    text-decoration: none;
    width: 51.04px;
    height: 23px;
    margin-top: 65px;
    margin-left: 48.04px;
    color: #1F1534;
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    }
}

> main {
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: 116px;
      margin-left: 120px;
      width: 489.38px;
      height: 112px;
      color: #1F1534;
      font-family: 'Mulish', sans-serif;
      font-size: 49px;
      font-weight: 400;
      line-height: 56px;
      letter-spacing: 0em;
      text-align: left;

      .azul {
        color: #89C5CC;
      }
    }

    p:nth-child(2) {
      margin-left: 120.09px;
      width: 438.34px;
      height: 84px;
      color: #7D7987;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;

      .cinza {
        color: #7D7987;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-weight: bold;
      }
    }

    p:nth-child(3) {
      margin-top: -70px;
      margin-left: 120.09px;
      width: 438.34px;
      height: 84px;
      color: #7D7987;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;

      .cinza {
        color: #7D7987;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-weight: bold;
      }
    }

    >img{
        display: flex;
        flex-direction: column;
        width: 417.33px;
        height: 433.64px;
        margin-top: -300px;
        margin-left: 710.55px;
    }

    >button{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 182px;
    height: 56px;
    margin-top: -120px;
    margin-left: 120px;
    border-radius: 4px;
    gap: 10px;
    background:#69B99D;
    color:#F9F9F9; 
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    outline: none;
    }
  }

  >footer{
    display: flex;
    

    h3{
    width: 592.46px;
    height: 28px;
    margin-top: 123px;
    margin-left: 344.27px;
    color: #000;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;

    .preto{
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    }
    }

    img{
    margin-top: 123px;
    margin-left: 258.2px;
    width: 98.47px;
    height: 88.001px;
    flex-shrink: 0;
    opacity: 0.3;
    }
  }

`;