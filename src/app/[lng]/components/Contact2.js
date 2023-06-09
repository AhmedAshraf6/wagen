'use client';
import React from 'react';
import './s.css';
import { useHubspotForm } from 'next-hubspot';
export default function Contact2() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: '139691288',
    formId: '3355dc76-496c-4f5d-aa84-5a348c6bb49f',
    target: '#contact',
  });
  return (
    <div
      id='contact'
      className='form w-[90%] sm:w-[75%] md:w-[50%] flex justify-center mx-auto'
    />
  );
}
