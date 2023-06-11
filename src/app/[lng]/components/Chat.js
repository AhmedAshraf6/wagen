'use client';
import Script from 'next/script';
import React, { useEffect } from 'react';

const Chat = () => {
  return (
    <>
      {' '}
      <Script
        async
        src='https://js.hs-scripts.com/139691288.js'
        strategy='lazyOnload'
      />
    </>
  );
};

export default Chat;
