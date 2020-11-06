import styled from 'styled-components';
import { media } from '../../themes';

export const Title = styled.p`
	font-size: 200%;
	font-weight: bold;
	color: #FCCA5A;
	margin-top: 20px;
	margin-bottom: 20px;
	${media.lessThan('tablet')`
		font-size: 120%;
		padding-left: 5%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 200%;
		padding-left: 5%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 220%;
		padding: 0 5%;
  `};
	${media.greaterThan('desktop')`
		font-size: 5rem;
		padding: 0 6%;
  `};
`;

export const Text = styled.p`
	color: #FFF;
	${media.lessThan('mobile')`
		font-size: 80%;
		padding: 0 5%;
  `};
	${media.between('mobile', 'tablet')`
		font-size: 100%;
		padding: 0 5%;
  `};
	${media.between('tablet', 'desktop')`
		font-size: 120%;
		padding: 0 5%;
  `};
	${media.greaterThan('desktop')`
		font-size: 270%;
		padding: 0 6%;
	`};
`;

export const WrapperSocial = styled.div`
	width: 100%;
	display: flex;
	margin-top: 70px;
	text-align: center;
	${media.lessThan('mobile')`
		width: 90%;
		padding: 0 1%;
		margin-top: 30px;
  `};
	${media.between('mobile', 'tablet')`
		width: 90%;
		padding: 0 2%;
  `};
	${media.between('tablet', 'desktop')`
		width: 40%;
		padding: 0 30%;
  `};
	${media.greaterThan('desktop')`
		width: 40%;
		padding: 0 30%;
	`};
`;

export const Link = styled.a`
	width: 25%;
	text-align: center;
`;

export const Facebook = styled.img`
	width: 55%;
	height: auto;
	margin-top: 5px;
	margin-left: 10px;
`;

export const Instagram = styled.img`
	width: 100%;
	height: auto;
	border-left: 1px solid #FCCA5A;
	border-right: 1px solid #FCCA5A;
`;

export const TikTok = styled.img`
	width: 72%;
	height: auto;
	margin-top: 6px;
	margin-left: -10px;
`;

export const YouTube = styled.img`
	width: 100%;
	height: auto;
	border-left: 1px solid #FCCA5A;
`;
export const ImageStripe = styled.img`
	width: 100%;
	margin-top: 5%;
	margin-bottom: 20px;
	${media.greaterThan('medium')`
	margin-top: 6%;
  `};
`;

export const SponsorContainer = styled.section`
	width: 100%;
	display: flex;
	${media.lessThan('tablet')`
		flex-direction: column;
		align-items: center;
  `};
	${media.between('tablet', 'desktop')`
		width: 90%;
		padding:5%;
  `};
`;

export const SponsorItem = styled.article`
	width: 100%;
	margin-bottom: 30px;
	text-align: center;
	${media.lessThan('tablet')`
	&:nth-child(1) {
		.title_item {
			margin-left: 24px;
		}
		margin-left: -50px;
	}
	.image_seline {
		width: 40%;
	}
  `};
	${media.between('tablet', 'desktop')`
		text-align: left;
		&:nth-child(1) {
		.title_item {
			margin-left: 18%;
		}
		margin-left: -30px;
	}
	.image_seline {
		width: 40%;
	}
  `};
	${media.greaterThan('desktop')`
		text-align: left;
		&:nth-child(1) {
		.title_item {
			margin-left: 14%;
		}
		margin-left: -70px;
	}
	.image_seline {
		width: 40%;
	}
  `};
`;

export const TitleItem = styled.p`
	color: #FFF;
	text-align: left;
	margin-bottom: 10px;
	${media.lessThan('tablet')`
		padding: 0 10%;
  `};
`;

export const Image = styled.img`
	width: 70%;
	height: auto;
	${media.between('tablet', 'desktop')`
		width: 90%;
  `};
`;
