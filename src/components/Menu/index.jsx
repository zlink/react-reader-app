import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FooterWrapper } from './style';

const Footer = (props) => {
  const { show } = props;

  return (
    <CSSTransition in={show} timeout={300} classNames="slide-up">
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
          <span className="icon icon-person"></span>
        </div>
      </FooterWrapper>
    </CSSTransition>
  );
};

export default Footer;
