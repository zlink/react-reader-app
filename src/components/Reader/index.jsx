import React, { useEffect, useRef } from 'react';
import { ReaderWrapper } from './style';
import Epub from 'epubjs';

const DOWNLOAD_URL = '/books/2018_Book_AgileProcessesInSoftwareEngine.epub';

const Reader = () => {
  const rendition = useRef();

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
      const offsetX = e.changedTouches[0].clientX - touchStartX;
      const time = e.timeStamp - touchStartTimestamp;
      if (time < 500 && offsetX > 40) {
        rendition.current.prev();
      } else if (time < 500 && offsetX < -40) {
        rendition.current.next();
      } else {
        // 判断点击位置可以同时支持点击和滑动翻页
        // showTitleAndMenu();
        // alert('menu');
      }
      e.stopPropagation();
    });
    return () => {
      book = null;
      rendition.current = null;
    };
  }, []);

  return (
    <ReaderWrapper>
      <div className="book-wrapper">
        <div id="book"></div>
      </div>
    </ReaderWrapper>
  );
};

export default Reader;
