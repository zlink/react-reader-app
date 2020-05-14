import styled from 'styled-components';
import { r } from '../../utils/helper';

export const MenuWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: ${r(42)};
  z-index: 101;
  display: flex;
  background-color: #fff;
  box-shadow: 0 -0.2162rem 0.2162rem rgba(0, 0, 0, 0.15);
`;

export const IconWrapper = styled.div`
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
`;

export const SettingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 ${r(-8)} ${r(8)} rgba(0, 0, 0, 0.15);
  z-index: 100;
  transform: translate3d(0, 100%, 0);
`;
