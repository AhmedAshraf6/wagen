import Script from 'next/script';
import React from 'react';

export default function GoogleTag() {
  return (
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-GDGGMB6W6Z'
      />
      <Script id='google-analytics' strategy='worker'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDGGMB6W6Z');
        `}
      </Script>
    </>
  );
}
