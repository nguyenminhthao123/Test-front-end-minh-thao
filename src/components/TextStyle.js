import React from 'react';
import styled from 'styled-components'
const TextStyle = ({ title, fontSize, fontWeight, fontFamily, mainInfo, subInfor }) => {
    return (
        <Wrapper >
            <div className="font">
                <div className="fontName" style={{ fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, fontStyle: `${fontFamily}` }}>{title}</div>
                <div className="fontStyleDetail">
                    <div className="mainInfo">{mainInfo}</div>
                    <div className="subInfor">{subInfor}</div>
                </div>
            </div>
        </Wrapper>
    );
};
export default TextStyle;
const Wrapper = styled.div`
.font{
  min-width:260px;
  padding:12px 48px 12px 0;
  -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    display: grid;

}
.font .fontStyleDetail {
  display: none;
}
.font .fontName, .font .mainInfo {
  
  color: var(--teflon);
}

@media(min-width: 576px)
{
.font{
  min-width:260px;
  padding:12px 48px 12px 0;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

}
.font .fontStyleDetail {
  padding: 6px 0 0;
  display: block;
}
.font .fontName, .font .mainInfo {
  
  color: var(--teflon);
}
.font .mainInfo {
  font-size: 15px;
  line-height: 18px;
}
.font .subInfor {
  font-size: 14px;
  line-height: 16px;
  color: var(--gandalf);
}
}

`