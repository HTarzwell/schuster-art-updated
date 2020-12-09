import React from 'react';
import { Card, Image, Transition, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const ArtistsCarousel = ({artist, index, clickFunction}) => {
  return (
    <Transition key={index} mountOnShow={true} unmountOnHide={true} visible={true}>
      <Card className="artist-card" onClick={() => this.clickFunction(artist)}>
        <Image src={artist.workPromo} wrapped ui={false}/>
        <Card.Content>
          <Card.Header>{artist.name}</Card.Header>
        </Card.Content>
      </Card>
    </Transition>
  )
}

export default ArtistsCarousel
