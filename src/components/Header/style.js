import styled from 'styled-components';
import { r } from '../../utils/helper';

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: ${r(42)};
  top: 0;
  left: 0;
  z-index: 101;
  background-color: #ffffff;
  box-shadow: 0 ${r(8)} ${r(8)} rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  .left {
    flex: 0 0 ${r(60)};
    display: flex;
    justify-content: center;
    .icon-back {
      font-size: ${r(16)};
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 ${r(40)};
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-cart {
        font-size: ${r(22)};
      }
    }
  }
`;
