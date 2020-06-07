import styled from 'styled-components';
import { r } from '../../utils/helper';

export const ShelfWrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  padding: 0 ${r(20)};
`;

export const ShelfContent = styled.div`
  margin-top: ${r(20)};
  .tools {
    height: ${r(20)};
    line-height: ${r(20)};
    font-size: ${r(14)};
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tool-item {
      display: flex;
      align-items: center;
      vertical-align: baseline;
    }
    .icon {
      font-size: ${r(18)};
      margin-right: ${r(2)};
    }
  }
`;

export const Books = styled.div`
  margin-top: ${r(20)};
  .row {
    display: flex;
    justify-content: space-around;
    .book {
      flex: 1;
      height: ${r(160)};
      width: ${r(80)};
      display: inline-block;
      img {
        border: none;
        width: 100%;
        object-fit: cover;
      }
      .book-name {
        font-size: ${r(12)};
        margin-top: ${r(10)};
      }
    }
  }
`;
