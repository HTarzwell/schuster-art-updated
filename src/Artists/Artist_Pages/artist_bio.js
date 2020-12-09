import React from 'react';
import { Card, Image, Transition, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const ArtistBio = ({artist}) => {
  return (
    <Segment>
      <div className="about-text">
      <div className="about-image">
        <Image size='small' floated='left' src={require('./susie.png')}/>
      </div>
        <h1>ABOUT SUSIE</h1>
        <p>Schuster Art Consultancy is a specialized business representing a select, exclusive portfolio of global artists. Covering varied and distinct genres of style, each artist brings finely honed technique and exquisite skill to their works.</p>

        <p>Whether it is a cityscape, plein air, geometric patterns, or a more contemporary work, the diversity of artistic offerings from Schuster Art Consultancy will provide you with more than just art; you will gain a unique impeccably created piece and a window to the world.</p>

        <p>Working professionally in the international design field for over forty years, Susan Schuster has the skill and experience to help design and populate a matchless space for the client, whether for a personal installation or a wide variety of institutions. Her unique combination of knowledge, experience and skills allow her to guide and match the client to art in the most professional manner.</p>

        <p>Schuster Art Consultancy takes pride in providing its clients with a one-on-one relationship during this all encompassing selection period and to optimize and harmonize, the client’s space and aesthetic preferences and needs.</p>

        <p>We have international experience, capability, and expertise in organizing and curating gallery exhibitions. Schuster Art Consultancy is also accomplished in selecting and providing artworks to institutions, offices and private spaces.</p>

        <p>Schuster Art Consultancy looks forward to assisting you in your future art acquisitions, whether personal or public.</p>

        <p>Above all we invite you to experience a world of creativity.</p>
      </div>
    </Segment>
  );
}

export default ArtistBio
