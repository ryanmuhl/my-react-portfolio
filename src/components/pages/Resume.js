import React from 'react';
import Obiwan from '../../assets/OBIWAN.jpg'

export default function Resume() {
  return (
    <div class="container pt-5">
      <h1 class="text-white body-title">My Qualifications</h1>
      <a href={Obiwan} download="Obiwan.jpg">Ryan Uhl - Resume</a>
    </div>
  );
}