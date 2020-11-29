import React from 'react';
import { Card, Divider, Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Artists extends React.Component {

  state = {
    hero: 'http://lorempixel.com/output/abstract-q-c-1440-750-8.jpg',
    maxSlides: 9
  }

  artistsImage = [
    {
      name: "Dan LaChapelle",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-5.jpg",
      index: 0
    },
    {
      name: "Leni Tarzwell",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-6.jpg",
      index: 1
    },
    {
      name: "Mike Truk",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
      index: 2
    },
    {
      name: "Bobson Dugnutt",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-8.jpg",
      index: 3
    },
    {
      name: "Hairy Davis",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-5.jpg",
      index: 4
    },
    {
      name: "Brent Fungeburger",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-6.jpg",
      index: 5
    },
    {
      name: "Alexis Windows",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
      index: 6
    },
    {
      name: "Bob Truknutt Junior",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-8.jpg",
      index: 7
    },
    {
      name: "Snuffles McGee",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
      index: 8
    },
  ]

  onClickRightArrow = () => {

  }

  onClickLeftArrow = () => {

  }

  changeHeroImage = image => {
    this.setState({
      hero: image
    })
  }

  render() {

    return (
      <div className="artists">
        <div className="artist-hero">
          <Image size="small" src={this.state.hero}/>
        </div>
        <Divider horizontal />
        <div className="artist-carousel">
          <div className="leftArrow" href='#' onClick={this.onClickLeftArrow}/>
            <Transition.Group
              animation="slide right"
              duration={200}
              divided
            >
              {this.artistsImage.map(artist => {
                if (artist.index < this.state.maxSlides)
                return <Card key={artist.index} href='#' onClick={() => this.changeHeroImage(artist.workPromo)}>
                  <Image src={artist.workPromo} wrapped ui={false}/>
                  <Card.Content>
                    <Card.Header>{artist.name}</Card.Header>
                  </Card.Content>
                </Card>
              })}
            </Transition.Group>
          <div className="rightArrow" href='#' onClick={this.onClickRightArrow}/>
        </div>
      </div>
    )
  }
}

export default Artists
