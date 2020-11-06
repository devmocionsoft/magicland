import styled from 'styled-components';
import { media } from '../../themes';

export const Title = styled.p`
	font-size: 200%;
	text-align: center;
	font-weight: bold;
	color: #FCCA5A;
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
	font-size: 5rem;
  `};
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	height: 290px;
	${media.lessThan('tablet')`
  flex-direction: column;
	align-items: center;
	height: 830px;
  `};
	${media.between('tablet', 'medium')`
		height: 215px;
		justify-content: space-around;
		margin-bottom: 5%;
  `}
	${media.between('medium', 'desktop')`
		justify-content: space-evenly;
		margin-bottom: 5%;
  `}
	${media.greaterThan('desktop')`
		justify-content: space-evenly;
		margin-bottom: 10%;
  `};
`;

export const Card = styled.img`
	width: 30%;
	height: 60%;
	${media.lessThan('tablet')`
		margin-bottom: 20px;
		width: 250px;
		height: 250px;
  `};
	${media.between('tablet', 'medium')`
		width: 25%;
		height: auto;
  `};
	${media.between('medium', 'desktop')`
		width: 25%;
		height: auto;
  `}
	${media.greaterThan('desktop')`
		width: 27%;
		height: 420px;
		margin-bottom: 120px;
  `};
`;
