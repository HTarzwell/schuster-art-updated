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
        <h1>PLACEHOLDER</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

        <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      </div>
    </Segment>
  );
}

export default ArtistBio
