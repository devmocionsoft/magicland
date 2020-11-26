import styled from 'styled-components';
import { media } from '../../themes';

export const Container = styled.section`
	width: 100%;
`;

export const Title = styled.p`
	color: ${(props) => props.theme.colors.orange};
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
		padding: 0 15% 0 15%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
  `};
`;

export const SubTitle = styled.p`
	color:${(props) => props.theme.colors.orange};
	font-size: 180%;
	text-align: center;
	font-weight: bold;
	margin-bottom: 25px;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
	${media.greaterThan('desktop')`
		font-size: 2rem;
  `};
`

export const Text = styled.p`
	color:${(props) => props.theme.colors.white};
	font-size: 160%;
	text-align: center;
	font-weight: bold;
	padding: 0 20%;
	margin: 0 0 10px 0;
	${media.lessThan('mobile')`
		font-size: 112%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 100%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 148%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.normal};
		margin: 0 0 30px 0;
  `};
`

export const Section = styled.div`
	text-align: center;
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
		width: 60%;
  `};
`

export const Pressable = styled.a`
	background-color: ${(props) => props.theme.colors.orange};
  border: none;
	color: ${(props) => props.theme.colors.dark};
	font-weight: bold;
  padding: 20px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 80%;
  margin: 4px 2px;
	cursor: pointer;
	margin-bottom: 20px;
	${media.lessThan('mobile')`
		font-size: 120%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 160%;
		width: 70%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 200%;
		width: 39%;
  `};
	${media.greaterThan('desktop')`
		font-size: ${(props) => props.theme.sizes.bigTitle};
		width: 39%;
  `};
`

export const SectionText = styled.div`
	width: 100%;
	display: flex;
`

export const TicketTitle = styled.p`
	color: ${(props) => props.theme.colors.white};
	font-weight: bold;
	font-size: 160%;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
`

export const TicketText = styled.p`
	font-size: 160%;
	color: ${(props) => props.theme.colors.orange};
	text-align: center;
	margin-bottom: 30px;
	${media.lessThan('tablet')`
		font-size: 100%;
  `};
`

export const LayoutCountry = styled.section`
	display: flex;
	${media.lessThan('mobile')`
  flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
		.flags_items {
			margin-left: -45px;
			${media.lessThan('mobile')`
				margin-left: -35px;
			`}
		};
  `};
	${media.between('tablet', 'medium')`
		justify-content: space-around;
  `}
	${media.between('medium', 'desktop')`
		justify-content: space-between;
		padding: 0 6%;
		padding: 0 15% 0 15%;
  `}
	${media.greaterThan('desktop')`
		justify-content: space-between;
		padding: 0 9% 0 9%;
  `}
`

export const Wrapper = styled.div`
	text-align: center;
	margin-top: 3%;
`

export const Separator = styled.img`
	width: 100%;
	margin: 3% 0;
`
