import React, {useState, useEffect} from 'react';
import './Artists.css'
import Carousel from './Artist_Pages/carousel';
import { Image, Modal, Button, Label, Grid } from 'semantic-ui-react';
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
  const [open, setOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    setArtist(artist.artist.location.artistSelected)
  }, []);


  useEffect(() => {
    selectedArtist ? setMaxPositionRight(selectedArtist.works.length) : setMaxPositionRight(10)
  }, [selectedArtist])

  useEffect(() => {
    selectedArtist ? setHero(selectedArtist.works[0].image) : setHero('')
  }, [selectedArtist])

  const changeHeroImage = index => {
    setHero(selectedArtist.works[index].image)
  }

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

  const openMobileModal = index => {
    setModalImage(selectedArtist.works[index].image);
    setOpenMobile(true);
  }

  return (
    <div className="artist-select">
      { selectedArtist ?
      (<div className="artist-page">
        <div className="artist-hero">
          <div className="leftArrow" href='#'>
          { currentPositionLeft > maxPositionLeft &&
            <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" />
          }
          </div>
          <Image id="artistHero" src={currentHero} onClick={() => setOpen(true)}/>
          <Modal
            basic
            closeIcon
            as={Image}
            open={open}
            size="large"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dimmer="blurring"
          >
            <Modal.Content>
              <Label id="artistWorkDetails" size="massive" ribbon as='a'>
                {selectedArtist.workPromo.info}
              </Label>
              <Image size='massive'
                      src={currentHero}
                       />
            </Modal.Content>
          </Modal>
          <div className="rightArrow" href='#'>
          { currentPositionRight < maxPositionRight &&
            <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" />
          }
          </div>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow" href='#'>
            { currentPositionLeft > maxPositionLeft &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronLeft} size="3x" onClick={() => moveCarousel("left")} />
            }
          </div>
          <CSSTransitionGroup className="cssExperimental"
              transitionName="artistCarousel"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              >
              {selectedArtist.works.map((work, index) =>
                (index <= currentPositionRight && index >= currentPositionLeft) ?
                  <div className="artist-card" key={index} onClick={() => changeHeroImage(index)}>
                    <img className= "artist-card-image" src={work.image}/>
                  </div> : null
              )}
          </CSSTransitionGroup>
          <div className="rightArrow" href='#'>
            { currentPositionRight < maxPositionRight &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" onClick={() => moveCarousel("right")}/>
            }
          </div>
        </div>
        <div className="artist-showcase-fullsize">
          <div className="artist-statement">
            <h1>{selectedArtist.name}</h1>
            <ArtistBio />
          </div>
          <div className="artist-photo">
            <img src={selectedArtist.artistPhoto} />
          </div>
        </div>
        <div className="artist-showcase-mobile">
          <div className="artist-statement">
            <h1>{selectedArtist.name}</h1>
            <div className="artist-photo">
              <img src={selectedArtist.artistPhoto} />
            </div>
            <ArtistBio />
          </div>
        </div>
        <div className="artist-grid-mobile">
          <Grid columns={2}>
            {selectedArtist.works.map((work, index) => {
              return (
                <Grid.Column id="artist-mobile-grid">
                  <Grid.Row>
                    <div className="artist-card" key={index} onClick={() => openMobileModal(index)}>
                      <img className= "artist-card-image" src={work.image}/>
                    </div>
                  </Grid.Row>
                </Grid.Column>
              );
            })}
            </Grid>
            <Modal
              basic
              closeIcon
              as={Image}
              open={openMobile}
              size="large"
              onClose={() => setOpenMobile(false)}
              onOpen={() => setOpenMobile(true)}
              dimmer="blurring"
            >
              <Modal.Content>
                <Label id="artistWorkDetails" size="large" ribbon as='a'>
                  {selectedArtist.workPromo.info}
                </Label>
                <Image size='massive'
                  src={modalImage}
                />
              </Modal.Content>
            </Modal>
        </div>
      </div>
    ) : null
      }
    </div>
  );
}

export default Artists;
