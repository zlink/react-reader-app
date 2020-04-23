import React from 'react';
import { FooterWrapper } from './style';

const Footer = () => (
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
      <span className="icon icon-share"></span>
    </div>
  </FooterWrapper>
);

export default Footer;
