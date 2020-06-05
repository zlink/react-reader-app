import styled from 'styled-components';
import { r } from '../../utils/helper';

export const TabsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${r(50)};
  background-color: #f0f0f0;
  border-top: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  display: flex;
  font-size: ${r(14)};
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
      margin-bottom: ${r(2)};
    }
  }
`;
