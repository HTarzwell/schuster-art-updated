import React from 'react';
import './Home.css'
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
      artist: artistsImage[0],
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
        artist: artistsImage[this.state.currentHeroPosition]
      })
    } else if (direction === "right") {
      this.setState({
        currentHeroPosition: this.state.currentHeroPosition +=1,
        currentHero: artistsImage[this.state.currentHeroPosition].workPromo,
        artist: artistsImage[this.state.currentHeroPosition]
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
      <div className="home">
        <div className="home-hero">
          <div className="leftArrow" href='#' onClick={() => this.changeHeroImage("left")}>
            { this.state.currentHeroPosition > this.state.maxHeroPositionLeft &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
            }
          </div>
            <div className="image-wrapper">
              <Link key={this.state.currentHeroPosition} exact className="artistLinks" to={{
                pathname: `/artists/${this.state.artist.name}`,
                artistSelected: this.state.artist
              }}>
                <img id="homeHero" src={this.state.currentHero.image}/>
              </Link>
            </div>
          <div className="rightArrow" href='#' onClick={() => this.changeHeroImage("right")}>
          { this.state.currentHeroPosition < this.state.maxHeroPositionRight &&
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          }
          </div>
        </div>
        <div className="home-carousel">
          <div className="leftArrow" href='#'>
          {(this.state.currentPositionLeft > this.state.maxPositionLeft) &&
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x"  onClick={() => this.moveCarousel("left")}/>
          }
          </div>
        <CSSTransitionGroup className="cssExperimental"
            transitionName="homeCarousel"
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
          <div className="rightArrow">
            {(this.state.currentPositionRight < this.state.maxPositionRight) &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x"  onClick={() => this.moveCarousel("right")}/>
            }
          </div>
        </div>
        <div className="home-grid-mobile">
          <Grid columns={2}>
            {artistsImage.map((artist, index) => {
              return (
                <Grid.Column id="home-mobile-grid">
                  <Grid.Row>
                    <Link className="artistLinks" to={{
                      pathname: `/artists/${artist.name}`,
                      artistSelected: artist
                    }}>
                    <Carousel
                      item={artist}
                      index={index}
                    />
                    </Link>
                  </Grid.Row>
                </Grid.Column>
              );
            })}
            </Grid>
        </div>
      </div>
    )
  }
}

export default Home
