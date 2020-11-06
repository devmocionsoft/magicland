import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({
  desktop: '1367px',
  medium: '1025px',
  tablet: '770px',
  mobile: '451px',
});

export default customMedia;
