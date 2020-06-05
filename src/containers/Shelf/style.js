import styled from 'styled-components';
import {r} from '../../utils/helper';

export const ShelfWrapper = styled.div``;

export const ShelfContainer = styled.div`
  margin: 0 ${r(20)};
  .search {
    margin-top: ${r(20)};
    height: ${r(40)};
    width: 100%;
    border-radius: ${r(20)};
    background-color:#eee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${r(16)};
    color: #999;
    .search-icon {
      flex: 0 0 ${r(40)};
      display: flex;
      justify-content: center;
      .icon {
        font-size: ${r(16)};
        font-weight: 600;
        color: #999;
      }
    }
    input {
        outline: none;
        border: none;
        flex: 1;
        background-color:#eee;
        font-size: ${r(16)};
    }
    .search-text {
      flex: 0 0 ${r(70)};
      color: #666;
      border-left: 1px solid #999;
      display: flex;
      justify-content: center;
    }
  }
`;

export const SearchInput = styled.input`
  
`;
