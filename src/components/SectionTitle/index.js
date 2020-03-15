import React from 'react';

import "./styles.css"

export default function SectionTitle({ name }) {
  return (
    <h2 className="section-title">
      {name}
    </h2>
  )
}
