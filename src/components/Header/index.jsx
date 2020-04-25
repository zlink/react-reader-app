import React, { memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper } from './style';

const Header = memo((props) => {
  const { show } = props;
  return (
    <CSSTransition in={show} timeout={5000} classNames="slide-down">
      <HeaderWrapper>
        <div className="left">
          <span className="icon icon-back" />
        </div>
        <div className="right">
          <div className="icon-wrapper">
            <span className="icon icon-cart" />
          </div>
          <div className="icon-wrapper">
            <span className="icon icon-person" />
          </div>
          <div className="icon-wrapper">
            <span className="icon icon-more" />
          </div>
        </div>
      </HeaderWrapper>
    </CSSTransition>
  );
});

export default memo(Header);
