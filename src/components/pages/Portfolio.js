import React from 'react';
import coverImage from '../../assets/headshot.jpg'

export default function Portfolio() {
  return (
    <div class="container pt-5">
      <h1 class="text-white body-title">Portfolio</h1>
      <div>
      <img src={coverImage} class="img-fluid img-thumbnail picture" alt="Responsive image"></img>
      </div>
    </div>
  );
}
