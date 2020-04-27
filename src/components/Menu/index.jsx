import React, { memo, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MenuWrapper } from './style';
import { connect } from 'react-redux';

const Menu = (props) => {
  const { menuVisible } = props;

  const handleClickIcon = useCallback((e) => console.log(e.target), []);

  return (
    <CSSTransition in={menuVisible} timeout={300} classNames="slide-up">
      <MenuWrapper className="slide-up-enter">
        <div className="icon-wrapper" onClick={(e) => handleClickIcon(e)}>
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
      </MenuWrapper>
    </CSSTransition>
  );
};

const mapStateToProps = (state) => state.Home;

export default connect(mapStateToProps, null)(memo(Menu));
