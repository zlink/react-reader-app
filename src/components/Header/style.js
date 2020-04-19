import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  .header-wrapper {
    position: absolute;
    width: 100vw;
    height: 1.2973rem;
    top: 0;
    left: 0;
    z-index: 101;
    background-color: #ffffff;
    display: flex;
    box-shadow: 0 0.2162rem 0.2162rem rgba(0, 0, 0, 0.15);
    .left {
      flex: 0 0 1.6216rem;
    }
    .right {
      flex: 1;
      justify-content: flex-end;
      .icon-wrapper {
        display: inline-block;
        flex: 0 0 1.0811rem;
      }
    }
  }
`;
