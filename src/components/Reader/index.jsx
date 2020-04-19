import React, { useEffect } from 'react';
import Epub from 'epubjs';

const DOWNLOAD_URL = '/books/2018_Book_AgileProcessesInSoftwareEngine.epub';
const book = new Epub(DOWNLOAD_URL);

const Reader = () => {
  useEffect(() => {
    console.log('reader book element');
    book
      .renderTo('book', {
        width: window.innerWidth,
        height: window.innerHeight,
      })
      .display();
  }, []);

  return (
    <div className="ebook">
      <div className="reader-wrapper">
        <div id="book"></div>
      </div>
    </div>
  );
};

export default Reader;
