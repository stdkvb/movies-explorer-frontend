import React from 'react';

function infoTooltip({ errorText }) {
  return (
    <section className="info-tooltip">
      <span className="info-tooltip__error">{errorText}</span>
    </section>
  );
}

export default infoTooltip;
