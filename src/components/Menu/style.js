import styled from 'styled-components';
import { r } from '../../utils/helper';

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${r(42)};
  z-index: 101;
  display: flex;
  box-shadow: 0 -0.2162rem 0.2162rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
  .icon-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-progress {
      font-size: ${r(28)};
    }
    .icon-bright {
      font-size: ${r(22)};
    }
  }
`;
