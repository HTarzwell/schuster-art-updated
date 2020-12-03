import React from 'react';
import { Card, Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Favorites extends React.Component {
  favoriteWorks = [
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
  ]

    state = {
      hero: this.favoriteWorks[0].workPromo,
      currentIndex: 0
    }

  onClickLeftHeroArrow = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        hero: this.favoriteWorks[this.state.currentIndex - 1].workPromo,
        currentIndex: this.state.currentIndex - 1
      })
    } else {
      return null
    }
  }

  onClickRightHeroArrow = () => {
    if (this.state.currentIndex < this.favoriteWorks.length - 1) {
      this.setState({
        hero: this.favoriteWorks[this.state.currentIndex + 1].workPromo,
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
            {this.favoriteWorks.map((artist, index) => {
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
        </div>
      </div>
    )
  }
}

export default Favorites
