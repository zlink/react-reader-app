import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper } from './style';
import { connect } from 'react-redux';

const Header = (props) => {
  const { menuVisible, back } = props;

  return (
    <CSSTransition in={menuVisible} timeout={300} classNames="slide-down">
      <HeaderWrapper id="header">
        <div className="left center">
          <span className="icon icon-back" onClick={() => back()} />
        </div>
        <div className="right center">
          <div className="icon-wrapper center">
            <span className="icon icon-shelf" />
          </div>
          <div className="icon-wrapper center">
            <span className="icon icon-person" />
          </div>
          <div className="icon-wrapper center">
            <span className="icon icon-more" />
          </div>
        </div>
      </HeaderWrapper>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => state.Ebook;

export default connect(mapStateToProps, null)(Header);
