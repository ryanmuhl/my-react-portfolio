import React from 'react';
import coverImage from '../../assets/OBIWAN.jpg'

export default function About() {
  return (
    <div class="container pt-5">
      <img src={coverImage} class="img-fluid img-thumbnail picture" alt="Responsive image"></img>
      <h1 class="text-white body-title">About Page</h1>
      <div class="about-body">
      <p class="text-white">
        Welcome to my Portfolio Website.  I currently reside in the suburbs of Raleigh, NC.  I have
        lived in the Raleigh area for approximately 15 years.  I am currently employeed with At&t with
        a title of Manager of Outside Plant and Engineering.  I have been employeed for the company
        since I graduated from Alfred State College, located in upstate New York.  
    <br></br>
    <br></br>
        As a person in a very technical field, I am always looking for ways to improve my technical 
        skill set. Front end web design has always been an interest, though I had never persued it 
        as a career path.  My interest in front end design prompted me to research different learning
        opportunities.  After a good deal of reasearch,  one of the most suggested paths to take was 
        a Coding Bootcamp Course.  I then decided to sign up for University of North Carolina Charlotte 
        Coding Bootcamp.  
    <br></br>
    <br></br>
        This career path, while very difficult, is one of the most rewarding experiences I have had in 
        my 15+ year career as an Engineer.  At the start of the Bootcamp,  I was not able to write a single
        line of code.  Nearing the Tail end of the course,  I have now created 20+ functional applications
        using many types of coding technologies.  I can honestly say after 6 months of classes,  I am now 
        a Full Stack Developer.
      </p>
      </div>
    </div>
  );
}