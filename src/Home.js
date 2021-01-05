import React from 'react';
import { Card, Image, Transition, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { artistsImage } from './Artists/Artist_Pages/artist_information';
import Carousel from './Artists/Artist_Pages/carousel';
import { Route, Router, Link } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'

class Home extends React.Component {

    state = {
      currentHero: artistsImage[0].workPromo,
      artist: null,
      currentPositionLeft: 0,
      currentPositionRight: 8,
      maxPositionLeft: 0,
      maxPositionRight: artistsImage.length,
      currentHeroPosition: 0,
      maxHeroPositionLeft: 0,
      maxHeroPositionRight: artistsImage.length - 1
    }


  changeHeroImage = direction => {
    if (direction === "left") {
      this.setState({
        currentHeroPosition: this.state.currentHeroPosition -= 1,
        currentHero: artistsImage[this.state.currentHeroPosition].workPromo,
      })
    } else if (direction === "right") {
      this.setState({
        currentHeroPosition: this.state.currentHeroPosition +=1,
        currentHero: artistsImage[this.state.currentHeroPosition].workPromo,
      })
    } else {
      return;
    }
  }

  moveCarousel = direction => {
    if (direction === "left") {
      this.setState({
        currentPositionLeft: this.state.currentPositionLeft -= 1,
        currentPositionRight: this.state.currentPositionRight -= 1
     })
   } else if (direction === "right") {
     this.setState({
       currentPositionRight: this.state.currentPositionRight += 1,
       currentPositionLeft: this.state.currentPositionLeft +=1
    })
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="artists">
        <div className="artist-hero">

          <div className="leftArrow" href='#' onClick={() => this.changeHeroImage("left")}>
            { this.state.currentHeroPosition > this.state.maxHeroPositionLeft &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
            }
          </div>
            <div className="image-wrapper">
              <img id="hero" src={this.state.currentHero.image}/>
            </div>
        { this.state.currentHeroPosition < this.state.maxHeroPositionRight &&
          <div className="rightArrow" href='#' onClick={() => this.changeHeroImage("right")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        }
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#' onClick={() => this.moveCarousel("left")}>
          {(this.state.currentPositionLeft > this.state.maxPositionLeft) &&
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          }
          </div>
        <CSSTransitionGroup className="cssExperimental"
            transitionName="home-carousel"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            >
            {artistsImage.map((artist, index) =>
              (index < this.state.currentPositionRight && index >= this.state.currentPositionLeft) ?
                <Link key={index} exact className="artistLinks" to={{
                  pathname: `/artists/${artist.name}`,
                  artistSelected: artist
                }}>
                  <Carousel
                    item={artist}
                    index={index}
                  />
                </Link>
               : null
            )}
            </CSSTransitionGroup>
        {(this.state.currentPositionRight < this.state.maxPositionRight) &&
          <div className="rightArrow" href='#' onClick={() => this.moveCarousel("right")}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        }
        </div>
        <div className="artists-grid-mobile">
            {artistsImage.map((artist, index) => {
              return (
                <Grid>
                  <Grid.Column>
                    <Link to={{
                      pathname: `/artists/${artist.name}`,
                      artistSelected: artist
                    }}>
                    <Carousel
                      item={artist}
                      index={index}
                    />
                    </Link>
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
// <Transition.Group duration={1500} mountOnShow={true} unmountOnHide={true} visible={true} animation={this.state.animation}>
// onClickLeftCarouselArrow = () => {
//   this.moveCarouselRight()
// }
//

//
// loadArtist = artist => {
//   console.log('artist is ', artist)
// }
