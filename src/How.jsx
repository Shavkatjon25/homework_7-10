import { Link } from "react-router-dom"
import styled from "styled-components"


const Continer=styled.div`
  max-width:100vw;
  min-height:100vh;
  margin:0;
  padding:0;
  background-image:url('./background-mobile.svg');
  background-repeat: no-repeat;
  background-size:cover;
  display:flex;
  flex-direction:column;
    align-items:center;
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
    margin-bottom:20px

}

@media screen and (max-width: 500px){
    width: 40px;
    height: 40px;
    margin-bottom:20px;
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
}
`
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
margin-top:80px;
margin-bottom:64px;

@media screen and (max-width: 1440px){
    margin-top:61px;
    margin-bottom:100px;
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
gap:20%;
align-items:center;

`

const Bola=styled.div`
width: 384px;
height: 550px;
text-align:center;
border-radius: 40px;
    display: flex;
    flex-direction:column;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap:16px;
    align-self: stretch;
    border-radius: 20px;
    background: var(--White, #FFF);
    margin:0;
    margin-bottom:24px;
    @media screen and (max-width: 1440px){
        margin-left:auto;
        margin-right:auto;
        width: 680px;
        height:200px;
        padding: 32px, 40px, 32px, ;
        border-radius: 40px;
        gap: 40px;


}
@media screen and (max-width: 781px){
    max-width: 324px;
    max-height: 185px;
    padding: 32px;
    border-radius: 20px;
    gap: 40px;


}
`
const Son=styled.h2`
    color: var(--Blue, #2463FF);
    font-family: "Mouse Memoirs";
    font-size: 88px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin:0;
    @media screen and (max-width: 1440px){
        font-size: 48px;
}
@media screen and (max-width: 500px){
    font-size: 24px;
}
`
const Bosqich=styled.h2`
   width:auto;
    color: var(--Dark-Navy, #261676);
    font-family: "Mouse Memoirs";
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin:0;
    @media screen and (max-width: 500px){
        font-size: 24px;
}
`
const Matn=styled.p`
    color: #887DC0;
    font-family: "Mouse Memoirs";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.8px;
    margin:0;
    @media screen and (max-width: 800px){
        font-size: 16px;
}
`
const SonBosqich=styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    width:100%;
    margin:0;
    @media screen and (max-width: 1440px){
    flex-direction:row;
}
`

const HowTo=styled.div`
    display:flex;
    gap:32px;
    @media screen and (max-width: 1440px){
    flex-direction:column;
    

}
@media screen and (max-width: 516px){
    font-size: 48px;
    gap:24px;
}
`

function How() {
  return (
    <Continer>
        {/* O'yn haqida malumotlat joylangan qism */}
        <Div>
        <Link to={'/'}>
        <Back>
            <Img src="./icon-back.svg" alt="" />
        </Back>
        </Link>
        <To>
            How to Play
        </To>
        </Div>
        <HowTo>
        <Bola>
            <SonBosqich>
             <Son>01</Son>
            <Bosqich>
            Choose a category
            </Bosqich>
            </SonBosqich>
            <Matn>
            First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.
            </Matn>
        </Bola>

        <Bola>
            <SonBosqich>
             <Son>02</Son>
            <Bosqich>
            Guess letters
            </Bosqich>
            </SonBosqich>
            <Matn>
            Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If its wrong, you lose some health, which empties after eight incorrect guesses.
            </Matn>
        </Bola>

        <Bola>
            <SonBosqich>
             <Son>03</Son>
            <Bosqich>
            Win or lose
            </Bosqich>
            </SonBosqich>
            <Matn>
            You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.
            </Matn>
        </Bola>
        </HowTo>
    </Continer>
  )
}

export default How