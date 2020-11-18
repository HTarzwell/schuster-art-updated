import React from 'react';
import { Divider, Image } from 'semantic-ui-react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import CustomDotGroup from './ArtistsGroup';
import "pure-react-carousel/dist/react-carousel.es.css";

class Artists extends React.Component {

  render() {

    return (
      <div className="artists">
        <div className="artists-carousel">
          <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={1}
              totalSlides={9}
              className="carousel-body"
              >
              <Slider className="slider">
                <Slide tag="a" index={0}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1449-727-5.jpg" />
                </Slide>
                <Slide tag="a" index={1}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1449-727-6.jpg" />
                </Slide>
                <Slide tag="a" index={2}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1449-727-9.jpg" />
                </Slide>
                <Slide tag="a" index={3}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1449-727-10.jpg" />
                </Slide>
                <Slide tag="a" index={4}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1449-727-8.jpg" />
                </Slide>
                <Slide tag="a" index={5}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1490-730-4.jpg" />
                </Slide>
                <Slide tag="a" index={6}>
                  <Image src="http://lorempixel.com/output/abstract-q-c-1325-681-2.jpg" />
                </Slide>
                <Slide tag="a" index={7}>
                  <Image src="http://lorempixel.com/output/nightlife-q-c-1325-681-4.jpg" />
                </Slide>
                <Slide tag="a" index={8}>
                  <Image src="http://lorempixel.com/output/technics-q-c-1325-681-4.jpg" />
                </Slide>
              </Slider>
              <Divider />
              <CustomDotGroup slides={9}/>
            </CarouselProvider>
        </div>
      </div>
    )
  }
}

export default Artists
