import React, { memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FooterWrapper } from './style';
import { connect } from 'react-redux';

const Footer = (props) => {
  const { menuVisible } = props;

  return (
    <CSSTransition in={menuVisible} timeout={300} classNames="slide-up">
      <FooterWrapper>
        <div className="icon-wrapper">
          <span className="icon icon-menu"></span>
        </div>
        <div className="icon-wrapper">
          <span className="icon icon-progress"></span>
        </div>
        <div className="icon-wrapper">
          <span className="icon icon-bright"></span>
        </div>
        <div className="icon-wrapper">
          <span className="icon icon-A"></span>
        </div>
      </FooterWrapper>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => state.Home;

export default connect(mapStateToProps, null)(memo(Footer));
