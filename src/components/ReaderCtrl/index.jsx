import React from 'react';
import { ReaderCtrWrapper } from './style';

const ReaderCtr = (props) => {
  const { prevPage, nextPage } = props;
  return (
    <ReaderCtrWrapper>
      <div className="left" onClick={() => prevPage()}></div>
      <div className="main"></div>
      <div className="right" onClick={() => nextPage()}></div>
    </ReaderCtrWrapper>
  );
};

export default ReaderCtr;
