import React, { useEffect, useRef, useCallback } from 'react';
import { ReaderWrapper } from './style';
import ReaderCtr from '../ReaderCtrl';
import Epub from 'epubjs';

const DOWNLOAD_URL = '/books/2018_Book_AgileProcessesInSoftwareEngine.epub';
const book = new Epub(DOWNLOAD_URL);

const Reader = () => {
  const rendition = useRef();

  useEffect(() => {
    rendition.current = book.renderTo('book', {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    rendition.current.display();
  }, []);

  const prevPage = useCallback(() => rendition.current.prev(), [rendition]);

  const nextPage = useCallback(() => rendition.current.next(), [rendition]);

  return (
    <ReaderWrapper>
      <div className="book-wrapper">
        <div id="book"></div>
      </div>
      <ReaderCtr prevPage={prevPage} nextPage={nextPage} />
    </ReaderWrapper>
  );
};

export default Reader;
