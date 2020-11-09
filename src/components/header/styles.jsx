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
	max-width: 72%;
	${media.lessThan('mobile')`
		max-width: 70%;
		margin-top: 10%;
  `};
	${media.between('mobile', 'tablet')`
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
	padding: 0 5%;
	color: ${(props) => props.theme.colors.orange};
	${media.lessThan('mobile')`
		font-size: 120%;
		padding: 0 2%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 200%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 220%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
		padding: 0 3%;
  `};
`;

export const Wrapper = styled.div`
	width: 100%;
	position: relative;
`

export const ImageAval = styled.img`
	width: 20%;
	height: auto;
	position: absolute;
	margin-top: 20px;
	${media.lessThan('mobile')`
	margin-left: -45px;
  `};
	${media.between('mobile', 'tablet')`
	margin-left: -30px;
  `};
	${media.between('tablet', 'desktop')`
	margin-left: -90px;
  `};
	${media.greaterThan('desktop')`
	margin-left: -165px;
  `};
`

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
	margin-top: 30px;
	margin-bottom: 40px;
	${media.lessThan('mobile')`
		font-size: 120%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 160%;
		width: 70%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 200%;
		width: 60%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
		width: 62%;
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
