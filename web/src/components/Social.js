import React from 'react';
import Img from 'gatsby-image';

function Social({ social }) {
  return (
    <div className={social}>
      <div className="row">
        {social.map((socialMedia) => (
          <div className={socialMedia.width} key={socialMedia.id}>
            <h3>{socialMedia.title}</h3>
            <a href={social.externallink.url} target="_blank" rel="noopener noreferrer">
              <Img fluid={socialMedia.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
