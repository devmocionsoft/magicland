import styled from 'styled-components';
import { media } from '../../themes';

export const Container = styled.section`
	width: 100%;
`;

export const Title = styled.p`
	color: #FCCA5A;
	text-align: center;
	font-weight: bold;
	margin: 0 0 10px 0;
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

export const SubTitle = styled.p`
	color:#FCCA5A;
	font-size: 180%;
	text-align: center;
	font-weight: bold;
	margin-bottom: 25px;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
	${media.greaterThan('desktop')`
	font-size: 260%;
  `};
`

export const Text = styled.p`
	color:#FFF;
	font-size: 160%;
	text-align: center;
	font-weight: bold;
	padding: 0 20% 0 20%;
	margin: 0 0 10px 0;
	${media.lessThan('mobile')`
		font-size: 80%;
  `};
	${media.between('mobile', 'tablet')`
	font-size: 100%;
  `};
	${media.between('tablet', 'desktop')`
	font-size: 120%;
  `};
	${media.greaterThan('desktop')`
	font-size: 240%;
	margin: 0 0 30px 0;
  `};
`

export const Section = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 45px 0;
	${media.lessThan('tablet')`
		flex-direction: column;
		align-items: center;
  `};
`

export const ImageCurious = styled.img`
	width: 36%;
	height: auto;
	position: relative;
	${media.lessThan('tablet')`
		width: 50%;
		margin-bottom: 5%;
  `};
`

export const Button = styled.button`
	background-color: #FCCA5A;
  border: none;
	color: #000;
	font-weight: bold;
  padding: 20px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 80%;
  margin: 4px 2px;
	cursor: pointer;
	width: 80%;
	margin-bottom: 20px;
	${media.lessThan('mobile')`
		font-size: 80%;
		width: 60%;
  `};
	${media.between('mobile', 'tablet')`
		width: 65%;
		font-size: 100%;
  `};
	${media.between('tablet', 'desktop')`
		width: 40%;
		font-size: 120%;
  `};
	${media.greaterThan('desktop')`
	width: 40%;
	font-size: 270%;
  `};
`;

export const Pressable = styled.a`
	background-color: #FCCA5A;
  border: none;
	color: #000;
	font-weight: bold;
  padding: 20px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 80%;
  margin: 4px 2px;
	cursor: pointer;
	width: 80%;
	margin-bottom: 20px;
	${media.lessThan('tablet')`
		font-size: 120%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 160%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 200%;
  `};
	${media.greaterThan('desktop')`
		font-size: 5rem;
  `};
`

export const SectionText = styled.div`
	width: 100%;
	display: flex;
`

export const TicketTitle = styled.p`
	color: #FFF;
	font-weight: bold;
	font-size: 160%;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
`

export const TicketText = styled.p`
	font-size: 160%;
	color:#FCCA5A;
	text-align: center;
	margin-bottom: 30px;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
`

export const LayoutCountry = styled.section`
	display: flex;
	${media.lessThan('tablet')`
  flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
	.flags_items{
		margin-left: -45px;
	};
  `};
	${media.between('tablet', 'medium')`
		justify-content: space-around;
  `}
	${media.between('medium', 'desktop')`
		justify-content: space-between;
		padding: 0 6%;
  `}
	${media.greaterThan('desktop')`
		justify-content: space-between;
		padding: 0 10% 0 10%;
  `}
`

export const Wrapper = styled.div`
	text-align: center;
	margin-top: 3%;
`

export const Separator = styled.img`
	width: 100%;
`
