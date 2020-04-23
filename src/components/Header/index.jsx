import React, { useCallback, memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderWrapper } from './style';

const Header = memo((props) => {
  const onClick = useCallback(() => console.log('e'), []);
  return (
    <HeaderWrapper>
      <div className="left" onClick={() => onClick()}>
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
});

export default Header;
