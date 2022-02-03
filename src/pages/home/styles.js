import styled from 'styled-components'

export const Homes = styled.div`
  width: 100%;
  height: fit-content;
  .text {
    position: absolute;
    top: 120px;
    margin: 0px 300px;
    text-align: center;
    color: white;
    .logo {
      font-size: 33px;
      line-height: 70px;
    }
    .post {
      text-transform: capitalize;
      margin: 20px 0;
      border: none;
      color: white;
      background-color: #dd783f;
      padding: 10px 15px;
    }
  }
  .category {
    width: 100%;
    position: absolute;
    top: 455.4px;
    list-style: none;
    color: #768088;
    background-color: #f0ead6;
    display: flex;
    padding: 20px 0;
    text-transform: capitalize;
    justify-content: center;
    li {
      margin: 0px 40px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 600px;
    img {
      height: 500px;
    }
    .text {
      width: 50%;
      margin: 0px 170px auto;
      .logo {
        font-size: 30px;
      }
    }
    .category {
      width: 100%;
      margin: 0px 0;
      li {
        margin: 0px 18px;
        font-size: 15px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 500px;
    img {
      height: 500px;
    }
    .text {
      width: fit-content;
      align-items: center;
      margin: 10px auto;
      .logo {
        font-size: 23px;
        text-align: center;
        margin: auto;
      }
      .dtl {
        padding: 10px;
        font-size: 14px;
      }
      .post{
        margin: 30px auto;
      }
    }
    .category {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 60px 0;
      li {
        margin: 10px 18px;
        font-size: 15px;
      }
    }
  }
`
