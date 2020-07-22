import React from 'react';
import CtaButton from './CtaButton';

function CallToAction({ title, subtitle, colWidth, CtaButtons, id }) {
  return (
    <div className={colWidth} key={id}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <CtaButton buttons={CtaButtons} />
    </div>
  );
}

export default CallToAction;
