import styled from 'styled-components';

export const ReaderCtrWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  .left {
    flex: 0 0 80px;
  }
  .main {
    flex: 1;
  }
  .right {
    flex: 0 0 80px;
  }
`;
