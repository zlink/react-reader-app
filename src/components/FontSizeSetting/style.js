import styled from 'styled-components';
import { r } from '../../utils/helper';

export const FontSettingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${r(100)};
  padding-bottom: ${r(42)};
`;

export const FontSelectorWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  &:nth-child(1) {
    &:first-child {
      border-top: none;
    }
  }
  .line {
    height: 0;
    flex: 1;
    border-top: ${r(1)} solid #ccc;
  }
  .point-wrapper {
    flex: 0 0 0;
    width: 0;
    height: ${r(7)};
    border-left: ${r(1)} solid #ccc;
  }
`;

export const FontSizePreview = styled.span`
  font-size: ${(props) => r(props.fontSize)};
  flex: 0 0 ${r(40)};
  height: 100%;
`;
