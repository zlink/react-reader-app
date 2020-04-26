import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper } from './style';
import { connect } from 'react-redux';

const Header = (props) => {
  const { menuVisible } = props;

  return (
    <CSSTransition in={menuVisible} timeout={300} classNames="slide-down">
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
};

const mapStateToProps = (state) => state.Home;

export default connect(mapStateToProps, null)(Header);
