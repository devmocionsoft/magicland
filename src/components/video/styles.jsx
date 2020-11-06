import styled from 'styled-components';
import { media } from '../../themes';

export const WrapperLayout = styled.div`
width: 100%;
	text-align: center;
	position: relative;
	padding-bottom: 36.25%;
	height: 0;
	overflow: hidden;
	iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
	}
`;

export const ImageStripe = styled.img`
	width: 100%;
	${media.greaterThan('medium')`
  `};
`;