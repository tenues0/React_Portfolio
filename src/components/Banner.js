import React from 'react';

import teddy from '../images/Teddy.jpg';
import kb from '../images/kb.jpg';

function Banner() {
    return (
        <div className="banner">
            <img className="banner-image" src={kb} alt="Keyboard" />
            <img className="banner-me" src={teddy} alt="a picture of me" />
            <div className="banner-text">Aspiring Computer Scientist</div>
        </div>
    );

};

export default Banner;