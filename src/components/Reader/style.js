import styled from 'styled-components'

export const ReaderWrapper = styled.div`
  position: relative;
  .ctr-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 101;
    display: flex;
    .left {
      flex: 0 0 2.5rem;
      background-color: #fff;
    }
    .main {
      flex: 1;
    }
    .right { 
      flex: 0 0 2.5rem;
      background-color: #fff;
    }
  }
`;