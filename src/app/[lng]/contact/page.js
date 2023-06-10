'use client';
import React, { useEffect } from 'react';

const contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '139691288',
          formId: '3355dc76-496c-4f5d-aa84-5a348c6bb49f',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div>
      <div
        id='hubspotForm'
        className='w-[90%] sm:w-[75%] md:w-[50%] flex justify-center mx-auto'
      ></div>
    </div>
  );
};

export default contact;
