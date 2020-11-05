import React from 'react';

import Physio from '../../assets/images/physio.jpg';

export default function Facilities() {
  return (
    <div className="mx-20">
      <div className="flex">
        <img src={Physio} alt="physio" className="w-64"/>
        <p>
          Physiotherapy is treatment to restore, maintain, and make the most of
          a patient's mobility, function, and well-being. Physiotherapy helps
          through physical rehabilitation, injury prevention, and health and
          fitness. Physiotherapists get you involved in your own recovery.
        </p>
      </div>
    </div>
  );
}
