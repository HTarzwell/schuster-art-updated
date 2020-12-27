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
      currentHero: artistsImage[0].workPromo,
      artist: null,
      currentPositionLeft: 0,
      currentPositionRight: 8,
      maxPositionLeft: 0,
      maxPositionRight: artistsImage.length,
      animation: null,
      activeCarouselItem: 0,
    }


  changeHeroImage = direction => {
    if (direction === "left" && this.state.currentPositionLeft > this.state.maxPositionLeft) {
      this.setState({
        currentPositionLeft: this.state.currentPositionLeft -= 1,
        currentHero: artistsImage[this.state.currentPositionLeft].workPromo,
        activeCarouselItem: this.state.activeCarouselItem -= 1,
      })
    } else if (direction === "right" && this.state.currentPositionRight < this.state.maxPositionRight) {
      this.setState({
        currentPositionLeft: this.state.currentPositionLeft +=1,
        currentHero: artistsImage[this.state.currentPositionLeft].workPromo,
        activeCarouselItem: this.state.activeCarouselItem +=1
      })
    } else {
      return;
    }
  }

  moveCarousel = direction => {
    if (direction === "left" && this.state.currentPositionLeft === this.state.maxPositionLeft) {
      return;
    } else if (direction === "right" && this.state.currentPositionRight === this.state.maxPositionRight) {
      return;
    } else if (direction === "left" && this.state.currentPositionLeft > this.state.maxPositionLeft) {
      this.setState({
        animation: "fly right",
        currentPositionLeft: this.state.currentPositionLeft -= 1,
        currentPositionRight: this.state.currentPositionRight -= 1
     })
   } else if (direction === "right" && this.state.currentPositionRight < this.state.maxPositionRight) {
     this.setState({
       animation: "fly left",
       currentPositionRight: this.state.currentPositionRight += 1,
       currentPositionLeft: this.state.currentPositionLeft +=1
    })
    } else {
      console.log('dics');
    }
  }

  render() {
    return (
      <div className="artists">
        <div className="artist-hero">
          <div className="leftArrow" href='#' onClick={() => this.changeHeroImage("left")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
            <div className="image-wrapper">
              <img id="hero" src={this.state.currentHero.image}/>
              <div id="work-info">{this.state.currentHero.info}</div>
            </div>
          <div className="rightArrow" href='#' onClick={() => this.changeHeroImage("right")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#' onClick={() => this.moveCarousel("left")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
            {artistsImage.map((artist, index) =>
              (
                <Transition.Group duration={1000} mountOnShow={true} unmountOnHide={true} visible={true} animation={this.state.animation}>
                {(index < this.state.currentPositionRight && index >= this.state.currentPositionLeft) ?
                <Link to={{
                  pathname: `/artists/${artist.name}`,
                  artistSelected: artist
                }}>
                  <Carousel
                    item={artist}
                    index={index}
                  />
                </Link>
               : null }
                </Transition.Group>
              )
            )}
          <div className="rightArrow" href='#' onClick={() => this.moveCarousel("right")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artists-grid-mobile">
            {artistsImage.map((artist, index) => {
              return (
                <Grid>
                  <Grid.Column>
                    <Card  key={index} className="artist-card">
                    <Link to={{
                      pathname: `/artists/${artist.name}`,
                      artistSelected: artist
                    }}>
                      <Image src={artist.workPromo} wrapped ui={false}/>
                      <Card.Content>
                        <Card.Header>{artist.name}</Card.Header>
                      </Card.Content>
                      </Link>
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
