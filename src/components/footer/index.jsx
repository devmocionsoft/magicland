import React from 'react';
import { Title, Text, WrapperSocial, Link, Facebook, Instagram, TikTok, YouTube, ImageStripe, SponsorContainer, SponsorItem, TitleItem, Image } from './styles';
import facebook from '../../assets/social/LOGO-FACEBOOK.png';
import instagram from '../../assets/social/LOGO-INSTAGRAM.png';
import tiktok from '../../assets/social/LOGO-TIKTOK-.png';
import youtube from '../../assets/social/YOUTUBE.png';
import stripe from '../../assets/images/FRANJA.png';
import aval from '../../assets/sponsors/AVAL.png';
import doritos from '../../assets/sponsors/DORITOS.png';
import selina from '../../assets/sponsors/SELINA.png';
import spin from '../../assets/sponsors/SPIN.png';

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
      <Title>NUEVAS NOTICIAS</Title>
      <Text>MANTENTE CONECTADO Y ENTERATE DE NOTICIAS, AVANCES DE LA SERIE Y CONTENIDO EXCLUSIVO.</Text>
      <WrapperSocial>
        <Social />
      </WrapperSocial>
      <ImageStripe src={stripe} />
      <SponsorContainer>
        <SponsorItem>
          <TitleItem className='title_item'>PRESENTA:</TitleItem>
          <Image src={aval} />
        </SponsorItem>
        <SponsorItem>
          <TitleItem>INVITA:</TitleItem>
          <Image src={doritos} />
        </SponsorItem>
        <SponsorItem>
          <TitleItem>APOYA:</TitleItem>
          <Image className='image_seline' src={selina} />
        </SponsorItem>
        <SponsorItem>
          <TitleItem>PRODUCE:</TitleItem>
          <Image src={spin} />
        </SponsorItem>
      </SponsorContainer>
    </>
  );
}

export default Footer;
