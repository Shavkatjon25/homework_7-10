import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Omborchi from "./Omborchi"

const Continer=styled.div`
  max-width:100vw;
  min-height:100vh;
  box-sizing:border-box;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
  padding-left:24px;
  padding-right:24px;
  padding-bottom:24px;  
`
const Back=styled.button`
cursor: pointer;
width: 94px;
height: 94px;
display:flex;
justify-content:center;
align-items:center;
border:none;
border-radius: 999px;
background: linear-gradient(180deg, #FE71FE 16.42%, #7199FF 100%);
box-shadow: 0px -6px 0px 7px rgba(157, 45, 245, 0.25) inset;
margin:0;

@media screen and (max-width: 1440px){
    width: 64px;
    height: 64px;
    margin-top:50px;

}

@media screen and (max-width: 500px){
    width: 40px;
    height: 40px;
    margin-top:60px;
}
`
const Img=styled.img`
    width:41px;
    margin:0px;
    padding:0;

@media screen and (max-width: 1440px){
    width:27px
}
@media screen and (max-width: 500px){
    width:18px
}`
const To=styled.h2`
min-width:680px;
text-align: center;
font-family: "Mouse Memoirs";
font-size: 136px;
font-weight: 400;
background: linear-gradient(180deg, #67B6FF 16.42%, #FFF 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-text-stroke-color: #243041;
margin:0;
padding:0px;


@media screen and (max-width: 1440px){
margin-top:61px;
min-width:343px;
font-size: 100px;


}

@media screen and (max-width: 516px){
font-size: 48px;
min-width:185px;

}
`

const Div=styled.div`
display:flex;    
gap:15%;
align-items:center;
margin-bottom:155px;
`

const Btn=styled.button`
  background: ${props=>props.bg};
  width:384px;
  height:190px;
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
    letter-spacing: 1.6px;
    text-transform: uppercase;
    @media screen and (max-width: 857px){
      width:300px;
      height:100px;
}
    @media screen and (max-width: 670px){
      display:block;
      min-width:100px;
      height:77px;
      margin:0;
      padding:0;
    }
`
const Buttonlar=styled.div`
  display:flex;
  gap:16px;
  flex-wrap:wrap;
  justify-content:center;
`

function Pick() {
    const dispach=useDispatch();
function oynTuri(k, m){
  const arr={k:k, m:m}
    dispach(Omborchi.actions.malumotTuri(arr))
 }

  return (
    <div>
        <Continer>
          {/* O'ynning katigorya qismi  */}
        <Div>
          <Link to={'/'}>
          <Back>
            <Img src="./icon-back.svg" alt="" />
        </Back>
          </Link>
        <To>
        Pick a Category
        </To>
        </Div>

        <Buttonlar>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(0, 'Movies')}>
            Movies
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(1,' TV SHOWS')}>
        TV SHOWS
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(2, 'COUNTRIES' )}>
        COUNTRIES
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(3, 'CAPITAL CITIES')}>
        CAPITAL CITIES
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(4, 'ANIMALS')}>
        ANIMALS
        </Btn>
        </Link>
        <Link to={'/oyn'}>
        <Btn bg='#2463FF' wh='100%' rd='20px' hg='77px' onClick={()=>oynTuri(5, 'SPORTS')}>
        SPORTS
        </Btn>
        </Link>
        </Buttonlar>
        </Continer>

    </div>
  )
}

export default Pick