import React, { useEffect, useRef, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../containers/Home/store/actionCreators';
import { ReaderWrapper } from './style';
import Epub from 'epubjs';
import { connect } from 'react-redux';

const DOWNLOAD_URL =
  '/books/Ding Tou Shi Nian Cai Wu Zi You - Yin Xing Luo Si Ding.epub';

const Reader = (props) => {
  const rendition = useRef();

  const container = useRef();
  const containerWidth = useRef();
  const {
    actions: { toggleMenuVisible },
  } = props;

  const toggle = useCallback(() => toggleMenuVisible(), []);

  useEffect(() => {
    containerWidth.current = window.getComputedStyle(container.current).width;
  }, []);

  useEffect(() => {
    let book = new Epub(DOWNLOAD_URL);

    rendition.current = book.renderTo('book', {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    rendition.current.display();

    let touchStartX = null;
    let touchStartTimestamp = null;
    rendition.current.on('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartTimestamp = e.timeStamp;
    });

    rendition.current.on('touchend', (e) => {
      const touched = e.changedTouches[0];
      const offsetX = touched.clientX - touchStartX;
      const time = e.timeStamp - touchStartTimestamp;
      if (time < 500 && offsetX > 40) {
        rendition.current.prev();
      } else if (time < 500 && offsetX < -40) {
        rendition.current.next();
      } else {
        toggle();
      }
      e.stopPropagation();
    });

    return () => {
      book = null;
      rendition.current = null;
    };
  }, [toggle]);

  return (
    <ReaderWrapper onClick={() => toggle()}>
      <div className="book-wrapper">
        <div ref={container} id="book"></div>
      </div>
    </ReaderWrapper>
  );
};

const mapStateToProps = (state) => state.Home;

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
