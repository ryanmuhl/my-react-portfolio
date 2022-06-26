import React from 'react';
import Obiwan from '../../assets/headshot.jpg'

export default function Resume() {
  return (
    <div class="container pt-5">
      <h1 class="text-white body-title pb-2">My Qualifications</h1>
      <div class="content-body">
        <div class="pb-3">
        <a class="resume-link" href={Obiwan} download="Obiwan.jpg">Ryan Uhl - Resume</a>
        </div>
        <div class="row qualifications">
        <h2>Front End Technologies/Skills</h2>
          <div class="col">
            
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </div>

          <div class="col">
            <ul>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
            </ul>
          </div>

          <div class="col">
            <ul>
            <li>Web API's</li>
              <li>Server Side API's</li>
            </ul>
          </div>
       
        </div>

        <div class="row qualifications">
        <h2>Back End Technologies/Skills</h2>
          <div class="col">
            
            <ul>
              <li>NodeJs</li>
              <li>OOP (Object Oriented Programming)</li>
              <li>Express</li>
            </ul>
          </div>

          <div class="col">
            <ul>
              <li>SQL</li>
              <li>ORM (Object Relational Mapping)</li>
              <li>MVC (Model View Controller)</li>
            </ul>
          </div>

          <div class="col">
            <ul>
            <li>Web API's</li>
              <li>NoSQl</li>
              <li>PWA (Progressive Web Applications)</li>
              <li>React</li>
              <li>MERN</li>
            </ul>
          </div>
       
        </div>








      </div>
    </div>
  );
}