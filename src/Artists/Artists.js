import React from 'react'
//import { Carousel } from 'react-elastic-carousel';

class Artists extends React.Component {
  state = {
    artists: [
    {id: 1, title: 'artist 1'},
    {id: 2, title: 'artist 2'},
    {id: 3, title: 'artist 3'},
    {id: 4, title: 'artist 4'},
    {id: 5, title: 'artist 5'}
  ]
}
  render() {
    const { artists } = this.state
    return (
      <div className="artists">
        <h1>This is the ARTISTS component!</h1>
      </div>
    )
  }
}

export default Artists
