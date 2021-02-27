import React, {useState, useEffect} from 'react';
import './Artists.css'
import Carousel from './Artist_Pages/carousel';
import { Image, Modal, Button, Label, Grid, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ArtistBio from './Artist_Pages/artist_bio';
import { CSSTransitionGroup } from 'react-transition-group';

const Artists = (artist) => {

  const [selectedArtist, setArtist] = useState();
  const [currentHero, setHero] = useState(null);
  const [currentHeroInfo, setHeroInfo] = useState(null);
  const [currentPositionLeft, setCurrentPositionLeft] = useState(0);
  const [currentPositionRight, setCurrentPositionRight] = useState(7);
  const maxPositionLeft = 0;
  const [maxPositionRight, setMaxPositionRight] = useState(null)
  const [animation, setAnimation] = useState(null)
  const [open, setOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const [gridInfo, setGridInfo] = useState(null)

  useEffect(() => {
    setArtist(artist.artist.location.artistSelected)
  }, []);


  useEffect(() => {
    selectedArtist ? setMaxPositionRight(selectedArtist.works.length) : setMaxPositionRight(10)
  }, [selectedArtist])

  useEffect(() => {
    selectedArtist ? setHero(selectedArtist.works[0].image) : setHero('')
  }, [selectedArtist])

  useEffect(() => {
    selectedArtist ? setHeroInfo(selectedArtist.works[0].details) : setHeroInfo('')
  }, [selectedArtist])

  const changeHeroImage = index => {
    setHero(selectedArtist.works[index].image)
    setHeroInfo(selectedArtist.works[index].details)
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
    setGridInfo(selectedArtist.works[index].details);
    setOpenMobile(true);
  }

  return (
    <div className="artist-select">
      { selectedArtist ?
      (<div className="artist-page">
        <div className="artist-hero">
          <div className="artist-showcase-fullsize">
            <div className="artist-statement">
              <div className="artist-photo">
                <img src={selectedArtist.artistPhoto} />
              </div>
              <div className="artist-text">
                <h1>{selectedArtist.name}</h1>
                <p>{selectedArtist.bio}</p>
              </div>
            </div>
          </div>
          <div className="artist-hero-image">
            <img id="artistHero" src={currentHero} onClick={() => setOpen(true)}/>
          </div>
          <Modal
            basic
            open={open}
            size="large"
            closeIcon
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            dimmer="blurring"
          >
            <Modal.Content>
              <div className="artist-label">
                <p className="selected-artist">{selectedArtist.name}</p>
                <p className="selected-title">{currentHeroInfo.title}</p>
                <p className="selected-materials">{currentHeroInfo.materials}</p>
                <p className="selected-size">{currentHeroInfo.size}</p>
                { currentHeroInfo.isForSale ?
                <Label as='a' size="medium" color='teal' attached="top right" tag icon="mail"
                onClick={() => {
                  window.location.href = `mailto:info@schusterartconsultancy.com?subject=${selectedArtist.name}&body=${currentHeroInfo.title}`
                }}
                >For sale</Label> :
                <Label color='grey' horizontal tag>Not for sale</Label>
                }
              </div>
              <Image size="massive"
                src={currentHero}
              />
            </Modal.Content>
          </Modal>
        </div>
        <div className="artist-carousel">
          <div className="leftArrow">
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
          <div className="rightArrow">
            { currentPositionRight < maxPositionRight &&
              <FontAwesomeIcon className="fa-icon" icon={faChevronRight} size="3x" onClick={() => moveCarousel("right")}/>
            }
          </div>
        </div>
        <div className="artist-showcase-mobile">
          <div className="artist-statement">
            <h1>{selectedArtist.name}</h1>
            <div className="artist-photo">
              <img src={selectedArtist.artistPhoto} />
            </div>
            <div className="artist-text">
              <p>{selectedArtist.bio}</p>
            </div>
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
          {gridInfo &&
            <Modal
              basic
              as={Image}
              open={openMobile}
              closeIcon
              size="large"
              onClose={() => setOpenMobile(false)}
              onOpen={() => setOpenMobile(true)}
              dimmer="blurring"
            >
              <Modal.Content>
                <div className="artist-label-mobile">
                  <p className="selected-artist">{selectedArtist.name}</p>
                  <p className="selected-title">{gridInfo.title}</p>
                  <p className="selected-materials">{gridInfo.materials}</p>
                  <p className="selected-size">{gridInfo.size}</p>
                  { gridInfo.isForSale ?
                    <Label as='a' size="medium" color='teal' attached="top right" tag
                    onClick={() => {
                      window.location.href = `mailto:info@schusterartconsultancy.com?subject=${selectedArtist.name}&body=${currentHeroInfo.title}`
                    }}>
                      For sale
                    </Label>
                      :
                    <Label size="medium" color='grey' attached="top right" tag>Not for sale</Label>
                  }
                </div>
                <Image size='massive'
                  src={modalImage}
                />
              </Modal.Content>
            </Modal>
            }
        </div>
      </div>
    ) : null
      }
    </div>
  );
}

export default Artists;
