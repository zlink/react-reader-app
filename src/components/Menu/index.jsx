import React, { memo, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MenuWrapper,
  IconWrapper,
  SettingWrapper,
  SettingFontSize,
} from './style';
import * as actionCreators from '../../containers/Ebook/store/actionCreators';

const Menu = (props) => {
  const {
    menuVisible,
    settingVisible,
    actions: { setSettingVisible },
  } = props;

  const toggleSettingVisible = useCallback((item) => setSettingVisible(item), [
    setSettingVisible,
  ]);

  return (
    <>
      <CSSTransition in={menuVisible} timeout={300} classNames="slide-up">
        <MenuWrapper className="slide-up-enter">
          <IconWrapper>
            <span className="icon icon-menu"></span>
          </IconWrapper>
          <IconWrapper>
            <span className="icon icon-progress"></span>
          </IconWrapper>
          <IconWrapper>
            <span className="icon icon-bright"></span>
          </IconWrapper>
          <IconWrapper onClick={() => toggleSettingVisible(0)}>
            <span className="icon icon-A"></span>
          </IconWrapper>
        </MenuWrapper>
      </CSSTransition>
      <CSSTransition
        in={settingVisible > -1}
        timeout={300}
        classNames="slide-up"
      >
        <SettingWrapper className="slide-up-enter">
          <SettingFontSize></SettingFontSize>
        </SettingWrapper>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => state.Ebook;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Menu));
