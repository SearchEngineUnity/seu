import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgContain = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

function ImageBox({ image, alt }) {
  return <ImgContain src={image} alt={alt} />;
}

ImageBox.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBox;
