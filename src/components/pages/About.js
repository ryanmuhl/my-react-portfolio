import React from 'react';
import coverImage from '../../assets/OBIWAN.jpg'

export default function About() {
  return (
    <div class="container pt-5">
      <img src={coverImage} class="img-fluid img-thumbnail picture" alt="Responsive image"></img>
      <h1 class="text-white body-title">About Page</h1>
      <div class="about-body">
      <p class="text-white">
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </div>
    </div>
  );
}