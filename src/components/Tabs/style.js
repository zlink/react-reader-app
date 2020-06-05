import styled from 'styled-components';
import { r } from '../../utils/helper';

export const TabsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${r(50)};
  box-shadow: 0 -5px  5px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  color: #333;
  display: flex;
  font-size: ${r(14)};
  .active {
    color: deepskyblue;
    .icon {
      color: deepskyblue;
    }
  }
`;

export const TabItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${r(12)};
    .icon {
      margin-bottom: ${r(4)};
      font-size: ${r(22)};
    }
  }
`;
