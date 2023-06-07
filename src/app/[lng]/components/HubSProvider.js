'use client';
import React from 'react';
import { HubspotProvider } from 'next-hubspot';

export default function HubSProvider({ children }) {
  return <HubspotProvider>{children}</HubspotProvider>;
}
