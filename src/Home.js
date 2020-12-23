import React from 'react';
import { Card, Image, Transition, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { artistsImage } from './Artists/Artist_Pages/artist_information';
import Carousel from './Artists/Artist_Pages/carousel';
import { Route, Router, Link } from "react-router-dom";

class Home extends React.Component {

    state = {
      hero: artistsImage[0].workPromo,
      artist: null
    }


  changeHeroImage = image => {
    this.setState({
      hero: image
    })
  }

  setArtist = artist => {
    this.setState({
      artist: artist
    })
  }

  render() {

    return (
      <div className="artists">
        <div className="artist-hero">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          <Image id="hero" src={this.state.hero}/>
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
            {artistsImage.map((artist, index) => {
              return (
                <Link to={{
                  pathname: `/artists/${artist.name}`,
                  artistSelected: artist
                }}>
                  <Carousel
                    item={artist}
                    index={index}
                  />
                </Link>
              );
            })}
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artists-grid-mobile">
            {artistsImage.map((artist, index) => {
              return (
                <Grid>
                  <Grid.Column>
                    <Card  key={index} className="artist-card" onClick={() => this.loadArtist(artist)}>
                      <Image src={artist.workPromo} wrapped ui={false}/>
                      <Card.Content>
                        <Card.Header>{artist.name}</Card.Header>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              );
            })}
        </div>
      </div>
    )
  }
}

export default Home


//
// moveCarouselRight = () => {
//   this.setState({
//     animation: "slide right",
//     hiddenIndex: this.state.transitioningIndex,
//     transitioningIndex: this.state.hiddenIndex
//   })
// }
//
// moveCarouselLeft = () => {
//   this.setState({
//     animation: "slide left",
//     hiddenIndex: this.state.transitioningIndex,
//     transitioningIndex: this.state.hiddenIndex
//   })
// }
//
// onClickRightCarouselArrow = () => {
//   this.moveCarouselLeft()
// }
//
// onClickLeftCarouselArrow = () => {
//   this.moveCarouselRight()
// }
//

//
// loadArtist = artist => {
//   console.log('artist is ', artist)
// }
