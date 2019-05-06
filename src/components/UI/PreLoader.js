import React from 'react'
import styled from 'styled-components';

const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index:100;

  text-align: center;

  background-color: white;


  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;

  h3 {
    color: #545454;
  }

  .loader-content {
    margin-bottom: 100px;
  }
  .loading {
    display: flex;
  }
  .loading-bar {
    margin: 10px;
    width: 15px;
    height: 15px;
    border-radius: 100px;
    animation: loading 1s ease-in-out infinite;
    transform: translateY(10px);

  }
  .loading-bar:nth-child(1) {
    /* background-color: #3498db; */
    background-color: ${props => props.theme.primaryColor};
    animation-delay: 0;
  }
  .loading-bar:nth-child(2) {
    /* background-color: #c0392b; */
    background-color: ${props => props.theme.secondaryColor};
    animation-delay: 0.09s;
  }
  .loading-bar:nth-child(3) {
    background-color: #f45036;
    animation-delay: .18s;
  }
  .loading-bar:nth-child(4) {
    background-color: #ff2300;
    animation-delay: .27s;
  }

  @keyframes loading {
    0% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(10px);
    }
  }
  
`

function PreLoader({isVisible}) {
  return (
    <PreloaderWrapper className={isVisible ? 'hidden' : ''}>
      <div className="loader-content">
        <h3>hmm.. Loading...</h3>
        <div className="loading">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    </PreloaderWrapper>
  )
}

export default PreLoader;
