import React from 'react';
import { WrapperLayout, ImageStripe } from './styles';
import stripe from '../../assets/images/FRANJA.png';

function Video() {
	return(
		<>
			<WrapperLayout>
				<iframe
					src="https://player.vimeo.com/video/480450196"
					title="magicLand"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
				>
<iframe src="https://player.vimeo.com/video/480450196?title=0&byline=0&portrait=0" width="640" height="291" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/480450196">Magic Land Trailer</a> from <a href="https://vimeo.com/mocion">Moderador</a> on <a href="https://vimeo.com">Vimeo</a>.</p>					
					
					
					
				</iframe>
			</WrapperLayout>
			<ImageStripe src={stripe} />
		</>
	)
}

export default Video;
