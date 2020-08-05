import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgContain = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

function ImageBox({ image, alt }) {
  return <ImgContain src={image} alt={alt} />;
}

ImageBox.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBox;
