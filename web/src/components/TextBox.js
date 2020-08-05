import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlockContent from './block-contents/SeuLPSerializer';

const Subtitle = styled.p`
  font-weight: bold;
`;

const Icon = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;

function TextBox({ leaderIcon, leaderAlt, leaderText, title, subtitle, text }) {
  return (
    <>
      {leaderText && (
        <p className="leader">
          {leaderIcon && <Icon src={leaderIcon} alt={leaderAlt} />}
          <span> {leaderText}</span>
        </p>
      )}
      {title && <h2>{title}</h2>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {text && <BlockContent blocks={text} />}
    </>
  );
}

TextBox.propTypes = {
  leaderIcon: PropTypes.string,
  leaderAlt: PropTypes.string,
  leaderText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.array,
};

TextBox.defaultProps = {
  leaderIcon: null,
  leaderAlt: null,
  leaderText: null,
  title: null,
  subtitle: null,
  text: null,
};

export default TextBox;
