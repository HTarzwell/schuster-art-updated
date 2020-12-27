import React, {useState, useEffect} from 'react';
import Carousel from './Artist_Pages/carousel';
import { Image, Transition } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ArtistBio from './Artist_Pages/artist_bio';

const Artists = (artist) => {

  const [selectedArtist, setArtist] = useState();
  const [currentHero, setInitialHero] = useState(null);
  const [currentPositionLeft, setCurrentPositionLeft] = useState(0);
  const [currentPositionRight, setCurrentPositionRight] = useState(8);
  const maxPositionLeft = 0;
  const [maxPositionRight, setMaxPositionRight] = useState()
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    console.log('artist is ', artist.artist.location.artistSelected)
    setArtist(artist.artist.location.artistSelected);
    if (selectedArtist) {
      setMaxPositionRight(selectedArtist.works.length);
      setInitialHero(selectedArtist.works[0])
    }
  }, []);

  const moveCarousel = direction => {
    if (direction === "left" && currentPositionLeft === maxPositionLeft) {
      return;
    } else if (direction === "right" && currentPositionRight === maxPositionRight) {
      return;
    } else if (direction === "left" && currentPositionLeft > maxPositionLeft) {
        setAnimation("fly right");
        setCurrentPositionLeft(currentPositionLeft -= 1);
        setCurrentPositionRight(currentPositionRight -= 1);
   } else if (direction === "right" && currentPositionRight < 20) {
       setAnimation("fly left");
       setCurrentPositionLeft(currentPositionLeft += 1);
       setCurrentPositionRight(currentPositionRight += 1);
  } else {
      console.log('maxRight is ', maxPositionRight);
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
          <Image id="hero" src={selectedArtist.workPromo.image}/>
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" onClick={() => moveCarousel("left")} />
          </div>
          {selectedArtist.works.map((work, index) => {
            return (
              <Transition.Group duration={1000} mountOnShow={true} unmountOnHide={true} visible={true} animation={animation}>
                {index < currentPositionRight && index > currentPositionLeft ?
                  <div className="artist-card" key={index}>
                    <img className= "artist-card-image" src={work}/>
                  </div> : null
                }
              </Transition.Group>
            )
          })}
          <div className="rightArrow" href='#'>
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" onClick={() => moveCarousel("right")}/>
          </div>
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
