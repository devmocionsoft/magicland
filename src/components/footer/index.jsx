import React from 'react';
import { Title, Text, WrapperSocial, Link, Facebook, Instagram, TikTok, YouTube, ImageStripe, SponsorContainer, SponsorItem, ImageSponsors } from './styles';
import facebook from '../../assets/social/LOGO-FACEBOOK.png';
import instagram from '../../assets/social/LOGO-INSTAGRAM.png';
import tiktok from '../../assets/social/LOGO-TIKTOK-.png';
import youtube from '../../assets/social/YOUTUBE.png';
import stripe from '../../assets/images/FRANJA.png';
import spon from '../../assets/sponsors/FOOTER-PATROCINADORES.png'
import aval from '../../assets/sponsors/AVAL.png';
import doritos from '../../assets/sponsors/DORITOS.png';

import flaming from '../../assets/sponsors/FLAMING.png';
import pepe from '../../assets/sponsors/PEPE.png';

import selina from '../../assets/sponsors/SELINA.png';
import spin from '../../assets/sponsors/SPIN.png';
import reach from '../../assets/sponsors/REACH.png';

const Social = () => {
  const faceUrl = 'https://www.facebook.com/YOLOAventuras01/';
  const instUrl = 'https://www.instagram.com/medicenyolo/?hl=es-la';
  const tikUrl = 'https://www.tiktok.com/@capitanyolotroll?lang=es';
  const youUrl = 'https://www.youtube.com/channel/UCOnIJiQuk1fDSp6p1GCZy3A';
  return (
    <>
      <Link href={faceUrl} target="_blank">
        <Facebook src={facebook} />
      </Link>
      <Link href={instUrl} target="_blank">
        <Instagram src={instagram} />
      </Link>
      <Link href={tikUrl} target="_blank">
        <TikTok src={tiktok} />
      </Link>
      <Link href={youUrl} target="_blank">
        <YouTube src={youtube} />
      </Link>
    </>
  );
};

function Footer() {
  return (
    <>
      <Title>NOTICIAS</Title>
      <Text>MANTENTE CONECTADO Y ENTERATE DE NOTICIAS, AVANCES DE LA SERIE Y CONTENIDO EXCLUSIVO.</Text>
      <WrapperSocial>
        <Social />
      </WrapperSocial>
      <ImageStripe src={stripe} />
      <SponsorContainer>
        <div className="footer_mobile">
        <SponsorItem>
          <img alt="aval" className="footer_image_aval" src={aval} />
        </SponsorItem>
        <SponsorItem>
          <img alt="doritos" className="footer_image_doritos" src={doritos} />
          <img alt="flaming" className="footer_image_flaming" src={flaming} />
          <img alt="pepe" className="footer_image_pepe" src={pepe} />
        </SponsorItem>
        <SponsorItem>
          <img alt="selina" className="footer_image_selina" src={selina} />
        </SponsorItem>
        <SponsorItem>
          <img alt="spin" className="footer_image_spin" src={spin} />
          <img alt="reach" className="footer_image_reach" src={reach} />
        </SponsorItem>
        </div>
        <div className="footer_desktop">
          <ImageSponsors src={spon}/>
        </div>
      </SponsorContainer>
    </>
  );
}

export default Footer;
