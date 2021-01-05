import React, {useState, useEffect} from 'react';
import Carousel from './Artist_Pages/carousel';
import { Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ArtistBio from './Artist_Pages/artist_bio';
import { CSSTransitionGroup } from 'react-transition-group'

const Artists = (artist) => {

  const [selectedArtist, setArtist] = useState();
  const [currentHero, setHero] = useState(null);
  const [currentPositionLeft, setCurrentPositionLeft] = useState(0);
  const [currentPositionRight, setCurrentPositionRight] = useState(8);
  const maxPositionLeft = 0;
  const [maxPositionRight, setMaxPositionRight] = useState(null)
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    setArtist(artist.artist.location.artistSelected)
  }, [artist]);

  useEffect(() => {
    selectedArtist ? setMaxPositionRight(selectedArtist.works.length) : setMaxPositionRight(10)
  })


  const moveCarousel = direction => {
    if (direction === "left") {
      setCurrentPositionLeft(currentPositionLeft - 1);
      setCurrentPositionRight(currentPositionRight - 1);
   } else if (direction === "right") {
      setCurrentPositionLeft(currentPositionLeft + 1);
      setCurrentPositionRight(currentPositionRight + 1);
  } else {
      return;
    }
  }

  return (
    <div className="artists artist-select">
      { selectedArtist ?
      (<div className="artist-page">
        <div className="artist-hero">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          </div>
          <Image id="artist-hero" src={selectedArtist.workPromo.image}/>
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          { currentPositionLeft > maxPositionLeft &&
            <div className="leftArrow" href='#'>
              <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" onClick={() => moveCarousel("left")} />
            </div>
          }
          <CSSTransitionGroup className="cssExperimental"
              transitionName="home-carousel"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              >
          {selectedArtist.works.map((work, index) =>
              (index <= currentPositionRight && index >= currentPositionLeft) ?
                  <div className="artist-card" key={index}>
                    <img className= "artist-card-image" src={work}/>
                  </div> : null

              )}
          </CSSTransitionGroup>
          { currentPositionRight < maxPositionRight &&
            <div className="rightArrow" href='#'>
              <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" onClick={() => moveCarousel("right")}/>
            </div>
          }
        </div>
        <div className="artist-showcase">
          <div className="artist-statement">
            <h1>{selectedArtist.name}</h1>
            <ArtistBio />
          </div>
          <div className="artist-photo">
            <img src={selectedArtist.artistPhoto} />
          </div>
        </div>
      </div>
    ) : null
      }
    </div>
  );
}

export default Artists;
