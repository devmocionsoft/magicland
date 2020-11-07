import styled from 'styled-components';
import { media } from '../../themes';

export const Layout = styled.div`
	display: flex;
	margin-bottom: 10px;
	align-items: center;
`;

export const Flag = styled.img`
	width: 30px;
	height: 20px;
	margin-right: 10px;
`;

export const Country = styled.p`
	font-size: 120%;
	color:#FCCA5A;
	margin-right: 5px;
	${media.lessThan('mobile')`
		font-size: 0.8rem;
  `};
	${media.between('mobile', 'tablet')`
	font-size: 100%;
  `};
	${media.between('tablet', 'medium')`
	font-size: 90%;
  `};
	${media.between('medium', 'desktop')`
	font-size: 120%;
  `};
	${media.greaterThan('desktop')`
	font-size: 1.8rem;
  `};
`;

export const Cost = styled.p`
	font-size: 120%;
	color:#fff;
	margin-right: 5px;
	${media.lessThan('mobile')`
		font-size: 0.8rem;
  `};
	${media.between('mobile', 'tablet')`
	font-size: 100%;
  `};
	${media.between('tablet', 'medium')`
	font-size: 90%;
  `};
	${media.between('medium', 'desktop')`
	font-size: 120%;
  `};
	${media.greaterThan('desktop')`
	font-size: 1.8rem;
  `};
`;

export const Type = styled.p`
	font-size: 120%;
	color:#fff;
	margin-right: 5px;
	${media.lessThan('mobile')`
	font-size: 0.8rem;
  `};
	${media.between('mobile', 'tablet')`
	font-size: 100%;
  `};
	${media.between('tablet', 'medium')`
	font-size: 90%;
  `};
	${media.between('medium', 'desktop')`
	font-size: 120%;
  `};
	${media.greaterThan('desktop')`
	font-size: 1.8rem;
  `};
`;
