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
	.footer_mobile {
		${media.greaterThan('tablet')`
			display: none;
		`}
	}
	.footer_desktop {
		${media.lessThan('tablet')`
			display: none;
		`}
	}
	${media.lessThan('tablet')`
		flex-direction: column;
		align-items: center;
  `};
	${media.greaterThan('tablet')`
		padding: 0 5%;
		width: 90%;
		margin-bottom: 5%;
  `};
`;

export const SponsorItem = styled.article`
	width: 100%;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	margin-left: 2%;
	.footer_image_aval {
		width: 70%;
		height: auto;
	}
	.footer_image_doritos {
		width: 30%;
		height: auto;
	}
	.footer_image_flaming {
		width: 30%;
		height: auto;
	}
	.footer_image_pepe {
		width: 30%;
		height: auto;
	}
	.footer_image_selina {
		width: 30%;
		height: auto;
	}
	.footer_image_spin {
		width: 40%;
		height: auto;
		margin-top: 20px;
	}
	.footer_image_reach {
		width: 40%;
		height: auto;
		margin-top: 32px;
	}
`;

export const ImageSponsors = styled.img`
	position: relative;
	width: 100%;
	height: auto;
`