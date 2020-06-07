import styled from 'styled-components';
import { r } from '../../utils/helper';

export const SearchWrapper = styled.div`
  // margin: 0 ${r(20)};
  padding-top: ${r(20)};
  .search {
    height: ${r(40)};
    width: 100%;
    border-radius: ${r(20)};
    background-color: #f1f2f4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r(14)};
    color: #999;
    .search-icon {
      flex: 0 0 ${r(35)};
      display: flex;
      justify-content: center;
      .icon {
        font-size: ${r(14)};
        font-weight: 600;
        color: #999;
      }
    }
    input {
      outline: none;
      border: none;
      flex: 1;
      background-color: #eee;
      font-size: ${r(14)};
    }
    .search-text {
      flex: 0 0 ${r(65)};
      color: #6767a3;
      border-left: 1px solid #999;
      display: flex;
      justify-content: center;
    }
  }
`;
