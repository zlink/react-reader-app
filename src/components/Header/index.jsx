import React from 'react';
import { HeaderWrapper } from './style';

const Header = () => (
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
);

export default Header;
