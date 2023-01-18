import React from "react";
import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;

  } 

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    font-family: var(--font-nunito);
    line-height: 1;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  button{cursor: pointer}
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #0e9, #d0e);
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background: rgba(255,255,255,0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
`;
const Circle = styled(motion.div)`
  place-self: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
`
const myVars = {
  start : { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } }
}
const boxVars = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5
    },
  }
}

const circleVars = {
  start :{
    opacity: 0,
},
  end: {
    opacity: 1,
    transition:{

    }
  }
}

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box variants={boxVars} initial ="start" animate="end">
          <Circle variants={circleVars}/>
          <Circle variants={circleVars}/>
          <Circle variants={circleVars}/>
          <Circle variants={circleVars}/>
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
