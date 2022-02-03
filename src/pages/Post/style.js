import styled from 'styled-components'
import img8 from '../../assest/image6.jpg'
//
export const Posts = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #f7f7f7;
  margin: -67px 0 10px 0;
  .logo {
    text-align: center;
    text-transform: capitalize;
    line-height: 60px;
  }
  .hr {
    width: 14%;
    margin: auto;
    height: 1px;
    background-color: lightgray;
    border: 1px solid lightgray;
  }
  .card-wraper {
    width: 80%;
    margin: 10px auto;
    display: flex;
    .card {
      height: 280px;
      color: white;
      width: 45%;
      margin: 30px 20px;
      .title {
        margin: 160px 0 16px 30px;
        font-size: 27px;
      }
      .about {
        margin: 10px 30px;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.7);
      }
      .d-flex {
        display: flex;
        width: 84%;
        margin: 20px auto;
        font-size: 12px;
        text-transform: capitalize;
        justify-content: space-between;
      }
    }
  }
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 40px auto;
    .cards {
      background-color: white;
      width: 30%;
      margin: 15px;
      .logos {
        margin: 10px 15px;
        font-size: 16px;
        font-weight: 550;
      }
      .detail {
        color: rgba(122, 122, 122, 1);
        font-size: 13px;
        margin: 16px;
      }
      .hrr {
        background-color: #f7f7f7;
        border: 1px solid #f7f7f7;
        height: 1.2px;
        margin: 16px 0;
      }
      .time {
        display: flex;
        font-size: 12px;
        margin: 15px;
        justify-content: space-between;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .card-wraper {
      display: grid;
      margin: 30px auto;
      .card {
        margin: 20px 40px auto;
        background-repeat: no-repeat;
        width: 90%;
        .d-flex {
          width: 87%;
          margin: 20px auto;
        }
      }
    }
    .cards-wrapper {
      width: 90%;
      justify-content: center;
      .cards {
        width: 40%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding-top: 50px;
    .card-wraper {
      display: grid;
      margin: 30px auto;
      .card {
        margin: 20px auto;
        background-repeat: no-repeat;
        width: fit-content;
        .d-flex {
          width: 87%;
          margin: 20px auto;
        }
      }
    }
    .cards-wrapper {
      width: 100%;
      display: grid;
      justify-content: center;
      .cards {
        width: 90%;
        margin: 20px auto;
      }
    }
  }
`

export const Footer = styled.div`
  background-image: url(${img8});
  width: 100%;
  padding-bottom: 100px;
  margin: -10px 0 0 0;
  color: white;
  .logo-s {
    font-size: 25px;
    position: relative;
    top: 71px;
    text-align: center;
  }
  .hr {
    height: 1px;
    width: 16%;
    margin: 100px auto;
    border: 1px solid white;
  }
  .input {
    display: flex;
    width: fit-content;
    margin: -50px auto;
    #email {
      width: 300%;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      padding: 10px 50px;
      border: none;
      outline: none;
    }
    #submit {
      margin: 0px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border: none;
      color: white;
      padding: 0px 25px;
      background-color: rgba(255, 255, 255, 0.28);
    }
  }
  @media screen and(max-width:768px) {
    height: 380px;
    .input {
      #email {
        padding: 9px 30px;
      }
    }
  }
  @media screen and(max-width:480px) {
 .hr{
   height: 1px;
   background-color: white;
 }
    .input {
      width: 90%;
display: grid;
      .email {
        padding: 9px 20px;
      }
      .submit {
        width: 10px;
      }
    }
  }
`
