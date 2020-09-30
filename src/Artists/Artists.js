import React from 'react'
import ImageGallery from 'react-image-gallery';

class Artists extends React.Component {


  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
    
    return (
      <div className="artists">
        <h1>This is the ARTISTS component!</h1>
        <ImageGallery items={images} />
      </div>
    )
  }
}

export default Artists
