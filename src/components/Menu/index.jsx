import React from 'react';
import { FooterWrapper } from './style';

const Footer = (props) => {
  const { show } = props;

  return show ? (
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
  ) : null;
};

export default Footer;
