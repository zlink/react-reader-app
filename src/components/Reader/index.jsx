import React, { useEffect, useRef, useCallback, memo } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../../containers/Home/store/actionCreators';
import { ReaderWrapper } from './style';
import Epub from 'epubjs';
import { connect } from 'react-redux';

const Reader = (props) => {
  const {
    book,
    actions: { toggleMenuVisible },
  } = props;

  const rendition = useRef();

  const toggle = useCallback(() => toggleMenuVisible(), [toggleMenuVisible]);

  useEffect(() => {
    let render = new Epub(book);

    rendition.current = render.renderTo('book', {
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
      render = null;
      rendition.current = null;
    };
  }, [toggle, book]);

  return (
    <ReaderWrapper onClick={() => toggle()}>
      <div className="book-wrapper">
        <div id="book"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Reader));
