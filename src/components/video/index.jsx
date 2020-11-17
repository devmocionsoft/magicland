import React from 'react';
import { WrapperLayout, ImageStripe } from './styles';
import stripe from '../../assets/images/FRANJA.png';

function Video() {
	return(
		<>
			<WrapperLayout>
				<iframe
					src="https://vimeo.com/480506602"
					title="magicLand"
					frameborder="0"
					allow="autoplay; fullscreen"
					allowfullscreen
				>
				</iframe>
			</WrapperLayout>
			<ImageStripe src={stripe} />
		</>
	)
}

export default Video;
