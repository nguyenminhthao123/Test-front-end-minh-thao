import React, { useEffect, useState } from 'react';
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
import { useDesignContext } from '../context/designs_context';
import styled from 'styled-components'

const Designs = ({ id, name, like, image }) => {
  const [heart, setHeart] = useState(true)
  const [tim, setTim] = useState(false)
  const { handleClickLike } = useDesignContext()
  let randomColor = "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
  const handleClick = (id) => {
    setHeart(false)
    handleClickLike(id)
    setTim(true)
  }
  useEffect(() => {
    const time = setTimeout(() => {
      setTim(false)
    }, 2000);
    return () => {
      clearTimeout(time);
    }
  }, [tim])
  return (
    <Wrapper>
      <div className="screen">
        <a href={image}>
          <img src={image} alt={`${name}`} style={{ width: '100%' }} ></img>
        </a>
        <div className="screenInfo">
          <span className="screenName">{name}</span>
          <div className="screenLikes">
            <span className="likeCount">{like}</span>
            <button onClick={() => handleClick(id)}>
              {heart && <TiHeartOutline />}
              {!heart && <TiHeartFullOutline />}
            </button>
          </div>
        </div>
        <div className={tim ? 'active-heart hearts' : 'hearts'} style={{ backgroundColor: `${randomColor}` }} ></div>
      </div>
    </Wrapper>
  );
};

export default Designs;
const Wrapper = styled.div`
width: 307px;
.screen {
  position: relative;
  margin-right: 40px;
  width: 100%;
  margin-bottom: 40px;
}
.screen img {
  border: 1px solid rgba(235, 232, 232, 0.575);
}
.screenInfo {
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: space-between;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 12px;
}
.screenName {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-height: 32px;
  min-height: 16px;
  line-height: 16px;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.screenLikes {
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 50%;
  margin-left: 10px;
}
.screenLikes button {
  background-color: transparent;
  color:var(--peach);
  cursor: pointer;
  font-size:15px
}
.likeCount {
  margin-right: 6px;
  line-height: 16px;
  font-size: 14px;
  color: var(--peach);
}
.heart{
  
  width: 100%;
  overflow: hidden;
}
.hearts{
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  width: 10px;
  height:10px;
  background-color: var(--peach);
  transform:rotate(45deg);
  opacity:0;
  transform:scale(0);
  transform: translateY(0);
  transform: translateX(0);
 
  
}
.active-heart{
  animation: hieuung 2s ease-in-out ;
}
.hearts::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: -5px;
  height:10px;
  width: 10px;
  background:inherit;
  border-radius: 50%;
 }
.hearts::after{
  content: "";
  position: absolute;
  bottom: 0;
  top: -5px;
  height:10px;
  width: 10px;
  background:inherit;
  border-radius: 50%;
  
  

}
@keyframes hieuung{
 
  from{
    opacity:1;
    transform:translateY(0) rotate(45deg) scale(1) translateX(0);
  }
  to{
    opacity:0;
    transform:translateX(-20px)  translateY(-60px)  scale(2) rotate(45deg);
  }
}
@media (min-width:577px) and (max-width:788px)
{
  width: 310px;
}
@media (min-width:789px) and (max-width:1024px) {
    width:270px;
}
@media (min-width:1025px)
{
  width:307px;
}
`