import styled from 'styled-components';
import { r } from '../../utils/helper';

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 1.2973rem;
  top: 0;
  left: 0;
  z-index: 101;
  background-color: #ffffff;
  display: flex;
  box-shadow: 0 ${r(8)} ${r(8)} rgba(0, 0, 0, 0.15);
  align-items: center;
  .left {
    flex: 0 0 ${r(100)};
  }
  .right {
    flex: 1;
    justify-content: flex-end;
    .icon-wrapper {
      display: inline-block;
      flex: 0 0 ${r(100)};
    }
  }
`;
