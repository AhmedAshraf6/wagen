'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';

const HubspotContactForm = () => {
  return (
    <div>
      <Script async src='https://js.hsforms.net/forms/v2.js' />

      <Script
        id='hubspotForm'
        dangerouslySetInnerHTML={{
          __html: ` window.hbspt.forms.create({
          portalId: '139691288',
          formId: '3355dc76-496c-4f5d-aa84-5a348c6bb49f',
          target: '#hubspotForm',
          });`,
        }}
      />
      <div
        id='hubspotForm'
        className='w-[90%] sm:w-[75%] md:w-[50%] flex justify-center mx-auto'
      ></div>
    </div>
  );
};

export default HubspotContactForm;
