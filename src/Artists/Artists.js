import React from 'react';
import { Card, Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Artists extends React.Component {

  artistsImage = [
    {
      name: "Dan LaChapelle",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-5.jpg",
    },
    {
      name: "Leni Tarzwell",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-6.jpg",
    },
    {
      name: "Mike Truk",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
    },
    {
      name: "Bobson Dugnutt",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-8.jpg",
    },
    {
      name: "Hairy Davis",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-5.jpg",
    },
    {
      name: "Brent Fungeburger",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-6.jpg",
    },
    {
      name: "Alexis Windows",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
    },
    {
      name: "Bob Truknutt Junior",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-8.jpg",
    },
    {
      name: "Snuffles McGee",
      workPromo: "http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg",
    },
  ]

    state = {
      hero: this.artistsImage[0].workPromo,
      hiddenIndex: (this.artistsImage.length - 1),
      transitioningIndex: 0,
      animation: null,
      currentIndex: 0
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
        hero: this.artistsImage[this.state.currentIndex - 1].workPromo,
        currentIndex: this.state.currentIndex - 1
      })
    } else {
      return null
    }
  }

  onClickRightHeroArrow = () => {
    if (this.state.currentIndex < this.artistsImage.length - 1) {
      this.setState({
        hero: this.artistsImage[this.state.currentIndex + 1].workPromo,
        currentIndex: this.state.currentIndex + 1
      })
    } else {
      return null
    }
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
            {this.artistsImage.map((artist, index) => {
              if (index !== this.state.hiddenIndex) {
                return (
                <Transition key={index} mountOnShow={true} unmountOnHide={true} visible={true} animation={this.state.animation} duration={500}>
                  <Card href='#' onClick={() => this.changeHeroImage(artist.workPromo)}>
                    <Image src={artist.workPromo} wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>{artist.name}</Card.Header>
                    </Card.Content>
                  </Card>
                </Transition>
              );
              } else {
                return (
                <Transition key={index} mountOnShow={true} unmountOnHide={true} visible={false} animation={this.state.animation} duration={500}>
                  <Card href='#' onClick={() => this.changeHeroImage(artist.workPromo)}>
                    <Image src={artist.workPromo} wrapped ui={false}/>
                    <Card.Content>
                      <Card.Header>{artist.name}</Card.Header>
                    </Card.Content>
                  </Card>
                </Transition>
              );
              }
            })}
          <div className="rightArrow" href='#' onClick={this.onClickRightCarouselArrow}>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
      </div>
    )
  }
}

export default Artists
