import React, { useEffect, useRef, useCallback } from 'react';
import { toggleMenuVisible } from '../../containers/Ebook/store/actionCreators';
import { ReaderWrapper } from './style';
import Epub from 'epubjs';
import { connect } from 'react-redux';
import RerenderdNotice from '../RerenderNotice';

const Reader = (props) => {
  const { book, dispatch } = props;

  const rendition = useRef();

  const toggleMenuAndSettingVisible = useCallback(() => {
    dispatch(toggleMenuVisible());
  }, [dispatch]);

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
        toggleMenuAndSettingVisible();
      }
      // e.preventDefault();
      e.stopPropagation();
    });

    return () => {
      render = null;
      rendition.current = null;
    };
  }, [toggleMenuAndSettingVisible, book]);

  return (
    <ReaderWrapper onClick={() => toggleMenuAndSettingVisible()}>
      <RerenderdNotice condition={toggleMenuAndSettingVisible} />
      <div className="book-wrapper">
        <div id="book" />
      </div>
    </ReaderWrapper>
  );
};

const mapStateToProps = (state) => state.Ebook;

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
