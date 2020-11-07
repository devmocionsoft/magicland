import styled from 'styled-components';
import { media } from '../../themes';

export const Title = styled.p`
	font-size: 200%;
	text-align: center;
	font-weight: bold;
	color: ${(props) => props.theme.colors.orange};
	margin-bottom: 20px;
	${media.lessThan('tablet')`
		font-size: 120%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 200%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 220%;
		padding: 0 5% 0 5%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
  `};
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	${media.lessThan('tablet')`
  flex-direction: column;
	align-items: center;
	height: 20%;
  `};
	${media.between('tablet', 'medium')`
		justify-content: space-around;
		margin-bottom: 5%;
		height: auto;
  `}
	${media.between('medium', 'desktop')`
		justify-content: space-evenly;
		margin-bottom: 5%;
		height: auto;
  `}
	${media.greaterThan('desktop')`
		width: 90%;
		padding: 0 5%;
		justify-content: space-between;
		margin-bottom: 10%;
		height: auto;
  `};
`;

export const Card = styled.img`
	width: 55%;
	height: auto;
	position: relative;
	${media.lessThan('tablet')`
		margin-bottom: 20px;
  `};
	${media.between('tablet', 'medium')`
		max-width: 30%;
  `};
	${media.greaterThan('medium')`
		width: 30%;
  `}
`;
