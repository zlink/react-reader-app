import styled from 'styled-components';
import { r } from '../../utils/helper';

export const TabsWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${r(60)};
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
`;
