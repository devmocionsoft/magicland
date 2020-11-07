import styled from 'styled-components';
import { media } from '../../themes';
import fondo from '../../assets/images/FONDO.png';

export const Container = styled.div`
  background: url(${fondo});
  background-repeat: no-repeat;
	${media.lessThan('mobile')`
		background-size: 100% 60%;
  `};
	${media.between('mobile', 'tablet')`
		background-size: 100% 80%;
  `};
	${media.between('tablet', 'medium')`
		background-size: 100% 85%;
  `};
	${media.between('medium', 'desktop')`
		background-size: 100% 90%;
  `}
	${media.greaterThan('desktop')`
		background-size: 100% 100%;
  `};
`;

export const Image = styled.img`
	width: 100%;
`;
export const Section = styled.div`
	width: 100%;
	text-align: center;
`;

export const ImageStripe = styled.img`
	width: 100%;
	margin-top: 5%;
	${media.greaterThan('medium')`
		margin-top: 6%;
  `};
`;

export const ImageLogo = styled.img`
	${media.lessThan('mobile')`
		max-width: 70%;
		margin-top: 10%;
  `};
	${media.between('mobile', 'tablet')`
		max-width: 72%;
		margin-top: 8%;
  `};
	${media.between('tablet', 'medium')`
		max-width: 72%;
		margin-top: 17%;
  `};
	${media.between('medium', 'desktop')`
		max-width: 72%;
		margin-top: 15%;
  `}
	${media.greaterThan('desktop')`
		max-width: 72%;
		margin-top: 15%;
  `};
`;

export const ImageSlogan = styled.img`
	margin-top: 20px;
	width: 80%;
`;

export const Separator = styled.img`
	width: 100%;
`;

export const Title = styled.p`
	text-align: center;
	font-weight: bold;
	color: ${(props) => props.theme.colors.orange};
	${media.lessThan('tablet')`
		font-size: 120%;
		padding: 0 2%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 200%;
		padding: 0 5% 0 5%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 220%;
		padding: 0 5% 0 5%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
  `};
`;

export const Pressable = styled.a`
	background-color: ${(props) => props.theme.colors.orange};
  border: none;
	color: ${(props) => props.theme.colors.dark};
	font-weight: bold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 80%;
  margin: 4px 2px;
	cursor: pointer;
	width: 55%;
	margin-top: 30px;
	margin-bottom: 40px;
	${media.lessThan('tablet')`
		font-size: 120%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 160%;
		width: 50%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 200%;
		width: 50%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
		width: 50%;
  `};
`;

export const SubTitle = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-size: 190%;
	font-weight: bold;
	${media.lessThan('mobile')`
		font-size: 110%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 130%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 160%;
  `};
	${media.greaterThan('desktop')`
		margin-top: 5%;
		font-size: 3rem;
  `};
`;
export const Text = styled(SubTitle)`
	font-size: 160%;
	margin-top: 3%;
	padding-left: 16%;
	padding-right: 16%;
	${media.lessThan('mobile')`
		padding: 0 5%;
		font-size: 80%;
  `};
	${media.between('mobile', 'tablet')`
		padding: 0 5%;
		font-size: 100%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 120%;
  `}
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.normal};
  `};
`;

export const SectionText = styled.div`
	width: 100%;
`;
