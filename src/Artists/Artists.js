import React from 'react'
import ImageGallery from 'react-image-gallery';

class Artists extends React.Component {


  render() {
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        description: 'artist 1'
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        description: 'artist 2'
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        description: 'artist 3'
      },
    ];

    return (
      <div className="artists">
        <ImageGallery items={images} />
      </div>
    )
  }
}

export default Artists
