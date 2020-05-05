import styled from 'styled-components';
import { r } from '../../utils/helper';

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: ${r(42)};
  z-index: 101;
  background-color: #ffffff;
  box-shadow: 0 ${r(8)} ${r(8)} rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  .left {
    flex: 0 0 ${r(40)};
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
      .icon-cart {
        font-size: ${r(22)};
      }
    }
  }
`;
