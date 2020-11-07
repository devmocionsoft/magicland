import React from 'react';
import { Container, Title, Text, SubTitle, Section, Pressable, Button, LayoutCountry, Wrapper, Separator, ImageCurious } from './styles';
import Countries from '../contries';
import divisor from '../../assets/images/DIVISOR.png';
import bigMac1 from '../../assets/images/IMG_8353.jpeg';
import bigMac2 from '../../assets/images/IMG_8526.jpeg';

const Register = () => {
  const url = 'https://evius.co/landing/5f99a20378f48e50a571e3b6';
  return (
    <Wrapper>
      <Title>ÚNETE Y SÉ PARTE DE ESTE MUNDO MÁGICO</Title>
      <Pressable href={url} target="_blank"><p>REGISTRATE GRATIS</p></Pressable>
    </Wrapper>
  );
};

function Tikets({ normal1, normal2, vip1, vip2 }) {
  return (
    <Container>
      <Title>ENTRADAS</Title>
      <Text>Haz parte de la aventura adquiriendo tu entrada desde USD$4 recuerda primero debes registrate y ser parte de nuestra comunidad.</Text>
      <SubTitle>#SABÍASQUE</SubTitle>
      <Section>
        <ImageCurious src={bigMac1} />
        <Button>UNA BOLETA DE MAGICLAND CUESTA LO MISMO QUE UNA HAMBURGUESA BIGMAC</Button>
      </Section>
      <LayoutCountry>
        <article>
          {normal1.map((item) => (
            <div key={item.id}>
              <Countries country={item.country} flag={item.image} cost={item.cost} type={item.type} />
            </div>
          ))}
        </article>
        <article className='flags_items'>
          {normal2.map((item) => (
            <div key={item.id}>
              <Countries country={item.country} flag={item.image} cost={item.cost} type={item.type} />
            </div>
          ))}
        </article>
      </LayoutCountry>
      <Register />
      <Separator src={divisor} />
      <Section>
        <ImageCurious src={bigMac2} />
        <Button>UNA BOLETA DE MAGICLAND CUESTA LO MISMO QUE UNA HAMBURGUESA BIGMAC</Button>
      </Section>
      <LayoutCountry>
        <article>
          {vip1.map((item) => (
            <div key={item.id}>
              <Countries country={item.country} flag={item.image} cost={item.cost} type={item.type} />
            </div>
          ))}
        </article>
        <article className='flags_items'>
          {vip2.map((item) => (
            <div key={item.id}>
              <Countries country={item.country} flag={item.image} cost={item.cost} type={item.type} />
            </div>
          ))}
        </article>
      </LayoutCountry>
      <Register />
      <Separator src={divisor} />
    </Container>
  );
}

export default Tikets;
