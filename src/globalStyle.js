import { createGlobalStyle } from 'styled-components';
import { r } from './utils/helper';

const globalStyle = createGlobalStyle`
html, body { overflow: hidden; background-color:#fff; }
.icon {
  color: #333333;
  font-size: ${r(20)};
}
`;

export default globalStyle;
