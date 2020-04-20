import React, { useEffect } from "react";
import Epub from "epubjs";
import { ReaderWrapper } from "./style";

const DOWNLOAD_URL = "/books/2018_Book_AgileProcessesInSoftwareEngine.epub";
const book = new Epub(DOWNLOAD_URL);

const Reader = () => {
  useEffect(() => {
    let rendition = book.renderTo("book", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    rendition.display();
    let touchStartX = null;
    let touchStartTimestamp = null;
    rendition.on("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartTimestamp = e.timeStamp;
    });
    rendition.on("touchend", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const offsetX = e.changedTouches[0].clientX - touchStartX;
      const time = e.timeStamp - touchStartTimestamp;
      if (time < 500 && offsetX > 40) {
        rendition.prev();
      } else if (time < 500 && offsetX < -40) {
        rendition.next();
      } else {
        // showTitleAndMenu();
      }
    });
  }, []);

  return (
    <ReaderWrapper>
      <div className="reader-wrapper">
        <div id="book" />
      </div>
      {/* <div className="ctr-wrapper">
        <div className="left" onClick={() => prevPage()} />
        <div className="main" />
        <div className="right" onClick={() => nextPage()} />
      </div> */}
    </ReaderWrapper>
  );
};

export default Reader;
