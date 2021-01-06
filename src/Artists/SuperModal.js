import React, {useState, useEffect} from 'react';
import { Image } from 'semantic-ui-react';

const SuperModal = (work) => {

  return (
    <div className="super-modal">
      <Image src={work} size="massive" />
    </div>
  )
}

export default SuperModal
