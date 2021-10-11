import React from 'react';
import { FacebookShareButton,TwitterShareButton} from "react-share";
import { FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components'
import { logo, share_url, tw_logo } from '../utils/constants';
const Header = () => {
  return (
    <Wrapper className="section-center" >
      <div className="header">
        <div className='header-top'>
          <h1 id="projectName">Test Front-end</h1>
          <div id="sharing" >
            <TwitterShareButton url={share_url} >
              <img src={tw_logo} className="icon-tw" alt="logo" />
            </TwitterShareButton>
            <FacebookShareButton
              url={share_url}
              quote={'Test Front-end'}
              hashtag={'test-front-end'}
            >
              <FaFacebookF className="icon-fb" />
            </FacebookShareButton>
          </div>
        </div>
        <h2 id="projectType">Web, 1x</h2>
        <a href={share_url} className='signature'>
          <span className="name">crafted in</span>
          <img src={logo} className="logo" alt='logo' ></img>
        </a>
      </div>
    </Wrapper>
  );
};
export default Header;
const Wrapper = styled.div`
h1 {
  font-size: 2rem;
}
h2{
  font-size:1rem;
}
.header{
  display:grid;
}
.header-top{
  display:flex;
  flex-direction:column-reverse;
}
#sharing {
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-self: flex-start;
}
.icon-fb{
  color: var(--selection-blue);
  width: 30px;
  height: 30px;
}
.icon-tw{
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
.signature{
    display: -webkit-flex;
    -webkit-align-items: center;
    display: flex;
    align-items: center;
    position: absolute;
    top: 36px;
    right: 40px;
    text-decoration:none;
}
.signature span {
  margin-right: 6px;
  line-height: 19px;
  font-size: 16px;
  color: var(--gandalf);
}
.logo{
  width: 24px;
  height:20px;
}

@media (min-width: 576px) {
  h1 {
  font-size: 3.2rem;
}
h2{
  font-size:1.2rem;
}
.header {
    display: grid;
    padding-bottom:56px;
}
.header-top{
  display:flex;
  justify-content:space-between;
  align-self:center;
  flex-direction:row;
}
#sharing {
 display: grid;
 grid-template-columns: 1fr 1fr;
 align-self:center;
}
.icon-fb{
  color: var(--selection-blue);
  width: 30px;
  height: 30px;
}
.icon-tw{
  color: var(--selection-blue);
  width: 30px;
  height: 30px;
  margin-right: 20px;
}
}
`