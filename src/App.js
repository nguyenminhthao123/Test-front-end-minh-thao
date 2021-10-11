
import Header from './components/Header';
import Color from './components/Color';
import TextStyle from './components/TextStyle';
import Designs from './components/Designs';
import { StyleText, Colors } from './data'
import { SRLWrapper } from "simple-react-lightbox";
import { useDesignContext } from './context/designs_context';
import styled from 'styled-components'
import { options } from './utils/constants';
function App() {
const { designsData } = useDesignContext()
  
  return (
    <Wrapper className="section">
      <div className="section-center">
        <Header />
      </div>
      <main className="section-center">
        <h3 id="fontBookHeader">Color palette</h3>
        <div className="colorPalette">
          {Colors.map((item, index) => {
            return <Color key={index} {...item} />
          })}
        </div>
        <h3>Text style catalog</h3>
        <div className="fontBook">
          {
            StyleText.map((item, index) => {
              return <TextStyle key={index} {...item} />
            })
          }
        </div>
        <h3>Designs</h3>
        <SRLWrapper options={options}  >
          <div className="screens">
            {designsData.map((item) => {
              return <Designs key={item.id} {...item} />
            })}
          </div>
        </SRLWrapper >
      </main>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
.fontBook{
  
}
.colorPalette{
  display:grid;
  grid-template-columns: 1fr 1fr;
  
}
.colorPreview::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.colorPreview{
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.screens{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 24px;
  justify-content:center;
}
@media (min-width: 576px){
.fontBook{
 columns: 2;
column-gap: 0;
}
.colorPalette{
  display: flex;
  flex-direction:row;
}
.screens{
  display: grid;
  grid-template-columns: 1fr 1fr;
  
}
@media (min-width:576px) {
  .colorPreview{
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
}
@media (min-width:577px) and (max-width:788px)
{
  .screens{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  
}
}
@media (min-width:800px){
  .screens{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  }
}
}
`
