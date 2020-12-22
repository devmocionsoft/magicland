import React from 'react';
import { Container, Section, ImageStripe, Wrapper, ImageAval, ImageLogo, ImageSlogan, Separator, Title, Pressable, SubTitle, Text, SectionText } from './styles';
import aval from '../../assets/sponsors/AVAL_LOGO.png';
import stripe from '../../assets/images/FRANJA.png';
import logo from '../../assets/images/LOGO_MAGICLAND.png';
import slogan from '../../assets/images/SLOGAN.png';
import divisor from '../../assets/images/DIVISOR.png';

function Header() {
  const url = 'https://evius.co/landing/5f99a20378f48e50a571e3b6';
  return (
    <Container>
      <Section>
        <ImageStripe src={stripe} />
        {/* <Title>REGISTRATE GRATIS PARA VER EL PRIMER EPISODIO</Title> */}
        <Pressable href={url} target="_blank"><p>DISFRUTA DEL TERCER EPISODIO UTILIZANDO TU CÓDIGO PAGO.</p></Pressable>
        <Wrapper>
          <ImageAval src={aval} />
          <ImageLogo src={logo} />
        </Wrapper>
        <ImageSlogan src={slogan} />
        <Separator src={divisor} />
        {/* <Title>Registrate gratis para ver el primer episodio</Title> */}
        {/* <Pressable href={url} target="_blank"><p>VER EPISODIOS</p></Pressable> */}
        {/* <Pressable href={url} target="_blank"><p>REGISTRATE GRATIS PARA VER EL PRIMER EPISODIO</p></Pressable> */}
        <SectionText>
          <SubTitle>La producción más grande de youtubers en habla hispana.</SubTitle>
          <Text>En <b>MAGICLAND</b> Yolo, Nando, Mariana y Panda son los protagonistas de esta serie cinematográfica para todas las edades, la serie con 4 episodios exclusivos, cargados de efectos especiales, magia, música, personajes fantásticos y un gran mensaje dirigido hacia la importancia del cuidado del medio ambiente y el futuro de la humanidad. Además de juegos, fiestas virtuales, premios y momentos de interacción con los <b>YOLO AVENTURAS</b>, únete y se parte de esta nueva comunidad en la tierra de la magia. No te quedes sin vivir esta increíble experiencia.</Text>
        </SectionText>
        <ImageStripe src={stripe} />
      </Section>
    </Container>
  );
}

export default Header;
