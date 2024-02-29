
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Continer=styled.div`
  min-width:100vw;
  min-height:100vh;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Bola=styled.div`
width: 592px;
height: 500px;
border-radius: 48px;
  background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow:  0px -8px 0px 4px #140E66 inset, 0px 6px 0px 8px #2463FF inset;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (max-width:500px){
    width: 324px;
    height: 481px;
  }
`
const Ply=styled.div`
  width: 200px;
height: 200px;
border-radius: 999px;
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9D2DF5 inset;
display:flex;
justify-content:center;
align-items:center;
margin-top: 61px;
margin-bottom: 69px ;
&:hover{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
  box-shadow: 0px -4px 0px 5px #243041 inset, 0px -12px 0px 11px #9D2DF5 inset,  ;
}
@media screen and (max-width: 500px) {
  width: 160px;
  height: 160px;
}

`

const Btn=styled.button`
  background: ${props=>props.bg};
  min-width:${props=>props.wh};
  min-height:${props=>props.hg};
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:${props=>props.rd};
  border:none;
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Mouse Memoirs";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 1.6px;
  text-transform: uppercase;

`
const Imge=styled.div`
  margin-top:-90px;
  @media screen and (max-width: 500px){
    margin-top:-50px;
   }

`
const Img=styled.img`
  width: 355.98px;
height: 163.91px;
@media screen and (max-width: 500px) {
  width:250px;
   height:115px;
}


`

function App() {
  return (
     <Continer> 
       {/* Saytning  kirish qismi */}
        <Bola> 
         <Imge>
         <Img src="./logo.svg" alt=""   />
         </Imge>
          <Link to={'/pick'}>
          <Ply>
            <img src="./icon-play.svg" alt="" />
          </Ply>
          
          </Link>
          <Link to={'/how'}><Btn bg='#2463FF' wh='260px' hg='62px' rd='40px'>HOW TO PLAY</Btn></Link>
        </Bola>
    </Continer>
  )
}

export default App