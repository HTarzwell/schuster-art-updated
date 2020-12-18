import React from 'react';
import { Card, Image, Transition, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { artistsImage } from './Artists/Artist_Pages/artist_information';
import ArtistsCarousel from './Artists/Artist_Pages/artist_carousel';

class Home extends React.Component {

    state = {
      hero: artistsImage[0].workPromo,
      hiddenIndex: (artistsImage.length - 1),
      transitioningIndex: 0,
      animation: null,
      currentIndex: 0,
      artistNavigation: 'artist_name'
    }


  moveCarouselRight = () => {
    this.setState({
      animation: "slide right",
      hiddenIndex: this.state.transitioningIndex,
      transitioningIndex: this.state.hiddenIndex
    })
  }

  moveCarouselLeft = () => {
    this.setState({
      animation: "slide left",
      hiddenIndex: this.state.transitioningIndex,
      transitioningIndex: this.state.hiddenIndex
    })
  }

  onClickRightCarouselArrow = () => {
    this.moveCarouselLeft()
  }

  onClickLeftCarouselArrow = () => {
    this.moveCarouselRight()
  }

  onClickLeftHeroArrow = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        hero: artistsImage[this.state.currentIndex - 1].workPromo,
        currentIndex: this.state.currentIndex - 1
      })
    } else {
      return null
    }
  }

  onClickRightHeroArrow = () => {
    if (this.state.currentIndex < artistsImage.length - 1) {
      this.setState({
        hero: artistsImage[this.state.currentIndex + 1].workPromo,
        currentIndex: this.state.currentIndex + 1
      })
    } else {
      return null
    }
  }

  loadArtist = artist => {
    console.log('artist is ', artist)
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
          <div className="leftArrow" href='#' onClick={this.onClickLeftHeroArrow}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          <Image id="hero" src={this.state.hero}/>
          <div className="rightArrow" href='#' onClick={this.onClickRightHeroArrow}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#' onClick={this.onClickLeftCarouselArrow}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          <HashRouter>
            {artistsImage.map((artist, index) => {
              return (
              <ArtistsCarousel
                artist={artist}
                index={index}
                onClickFunction={this.changeHeroImage}
              />
            );
            })}
            </HashRouter>
          <div className="rightArrow" href='#' onClick={this.onClickRightCarouselArrow}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artists-grid-mobile">
          <HashRouter>
            {artistsImage.map((artist, index) => {
              return (
                <Grid key={index}>
                  <Grid.Column>
                    <Card className="artist-card" onClick={() => this.loadArtist(artist)}>
                      <Image src={artist.workPromo} wrapped ui={false}/>
                      <Card.Content>
                        <Card.Header>{artist.name}</Card.Header>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              );
            })}
            </HashRouter>
        </div>
      </div>
    )
  }
}

export default Home
