import React, { useEffect } from 'react';

const RerenderedNotice = (props) => {
  const { condition } = props;
  useEffect(() => {
    console.log('Children Component Rerendered...');
  }, [condition]);

  return <></>;
};

export default RerenderedNotice;
