import React from 'react';
import {
  FontSettingWrapper,
  FontSelectorWrapper,
  FontSizePreview,
} from './style';

const FontSizeList = [12, 14, 16, 18, 20, 22];

const FontSizeSetting = (props) => {
  return (
    <FontSettingWrapper id="wrapper">
      <FontSizePreview className="center" fontSize={FontSizeList[0]}>
        A
      </FontSizePreview>
      {FontSizeList.map((item, index) => (
        <FontSelectorWrapper key={index}>
          <div className="line" />
          <div className="point-wrapper">
            <div className="point"></div>
          </div>
          <div className="line" />
        </FontSelectorWrapper>
      ))}

      <FontSizePreview
        className="center"
        fontSize={FontSizeList[FontSizeList.length - 1]}
      >
        A
      </FontSizePreview>
    </FontSettingWrapper>
  );
};

export default FontSizeSetting;
