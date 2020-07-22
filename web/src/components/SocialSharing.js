import React from 'react';

import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

// import PropTypes from 'prop-types';

function SocialSharing({ url }) {
  return (
    <div className="sticky-top">
      <div className="mb-2">
        <TwitterShareButton url={url}>
          <TwitterIcon size="32" round />
        </TwitterShareButton>
      </div>
      <div className="mb-2">
        <FacebookShareButton url={url}>
          <FacebookIcon size="32" round />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default SocialSharing;
