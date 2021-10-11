import React from 'react';
import styled from 'styled-components'
const Color = ({ title, color, RGB }) => {
    return (
        <Wrapper>
            <div className="color">
                <div className="colorPreview boder" style={{ backgroundColor: `${color}` }}></div>
                <div className="colorInfor">
                    <div className="colorName">{title}</div>
                    <div className="colorHex">{color}</div>
                    <div className="colorRGB">{RGB}</div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Color;
const Wrapper = styled.div`
.color{
  display:grid;
  width: 260px;
  height:102px;
  padding:12px 6px 26px 0;
}
.colorInfor{
        margin: 10px;
    }
    
.colorName{
    width: 176px;
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 19px;
    font-size: 16px;
    color: #554d56;
    color: var(--teflon);
}
.colorHex{
 display: none;
}
.colorRGB{
 display: none;
}
.boder{
  border: 2px solid rgba(0, 0, 0, 0.15);
}
@media (min-width:567px){
.color{
  display: flex;
  width: 260px;
  height:102px;
  padding:12px 6px 26px 0;
}
    .colorInfor {
            display:block;
}
.colorHex{
  margin-bottom: 2px;
  line-height:19px;
  font-size: 16px;
  color: var(--gandalf);
  display: block;
}
.colorRGB{
  line-height:16px;
  font-size: 14px;
  color: var(--gandalf);
  display: block;
}
}

`