import React, { memo, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  PageWrapper,
  MenuWrapper,
  IconWrapper,
  SettingWrapper,
  SettingFontSize,
} from './style';
import { setSettingVisible } from '../../containers/Ebook/store/actionCreators';

const Menu = (props) => {
  const { menuVisible, settingVisible, dispatch } = props;

  const toggleSettingVisible = useCallback(
    (item) => {
      dispatch(setSettingVisible(item));
    },
    [dispatch],
  );

  return (
    <PageWrapper>
      <CSSTransition in={menuVisible} timeout={300} classNames="slide-up">
        <MenuWrapper>
          <IconWrapper onClick={() => toggleSettingVisible(1)}>
            <span className="icon icon-menu" />
          </IconWrapper>
          <IconWrapper onClick={() => toggleSettingVisible(2)}>
            <span className="icon icon-progress" />
          </IconWrapper>
          <IconWrapper onClick={() => toggleSettingVisible(3)}>
            <span className="icon icon-bright" />
          </IconWrapper>
          <IconWrapper onClick={() => toggleSettingVisible(0)}>
            <span className="icon icon-A" />
          </IconWrapper>
        </MenuWrapper>
      </CSSTransition>
      <CSSTransition
        in={settingVisible > -1}
        timeout={300}
        classNames="slide-up"
      >
        <SettingWrapper className="slide-up-enter">
          <SettingFontSize>Font Size Setting</SettingFontSize>
        </SettingWrapper>
      </CSSTransition>
    </PageWrapper>
  );
};

const mapStateToProps = (state) => state.Ebook;

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(memo(Menu));
