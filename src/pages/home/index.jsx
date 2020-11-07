import React from 'react';
import { Header, Video, Tikets, Photos, Footer } from '../../components';
import { normal1, normal2 } from '../../utils/data';

function Home() {
  return (
    <>
      <Header />
      <Video />
      <Tikets normal1={normal1} normal2={normal2} />
      <Photos />
      <Footer />
    </>
  );
}

export default Home;
