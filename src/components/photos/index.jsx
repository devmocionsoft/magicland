import React from 'react';
import { Title, Container, Card } from './styles';
import image1 from '../../assets/images/IMG_1.jpg';
import image2 from '../../assets/images/IMG_2.jpg';
import image3 from '../../assets/images/IMG_3.jpg';

function Photos() {
  return (
    <>
      <Title>FOTOS MAGIC LAND</Title>
      <Container>
        <Card src={image1} />
        <Card src={image2} />
        <Card src={image3} />
      </Container>
    </>
  );
}

export default Photos;
