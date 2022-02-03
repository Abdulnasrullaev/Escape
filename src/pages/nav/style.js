import styled from 'styled-components'

export const NavBar = styled.div`
  position: static;
  width: 100%;
  justify-content: space-between;
  z-index: 999;
  color: white;
  background-color: gray;
  display: flex;
  text-transform: capitalize;
  .logo {
    font-size: 30px;
    margin: 16px 100px auto;
  }
  nav {
    list-style: none;
    display: flex;
    margin: 16px 100px;
    li {
      margin: 12px 20px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .logo {
      font-size: 26px;
      margin: 16px 40px auto;
    }
    nav {
      margin: 10px 10px;
      font-size: 14px;
      li {
        margin: 15px 10px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    margin-bottom: 0px;
    .logo {
      font-size: 26px;
      margin: 16px 40px auto;
    }
    nav {
      margin: 10px 10px;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      li {
        margin: 15px 10px;
      }
    }
  }
`
