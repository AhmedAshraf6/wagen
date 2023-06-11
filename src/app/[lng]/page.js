import React from 'react';
import Offers from './components/Offers';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Packages from './components/Packages';
import Clients from './components/Clients';
import GooMap from './components/GooMap';
import GoogleTag from './components/GoogleTag';
import Footer from './components/Footer';
import ScrollToTopCom from './components/ScrollToTopCom';
import Whattsapp from './components/Whattsapp';
import Chat from './components/Chat';
import HubspotContactForm from './components/HubspotContactForm';
export const metadata = {
  alternates: {
    canonical: 'https://wagen.vercel.app',
  },
};
export default async function Page({ params: { lng } }) {
  return (
    <main className={lng === 'en' ? 'font-eng' : 'font-arb'}>
      <Hero />
      <Stats />
      <Offers />
      <Clients />
      <Packages />
      <HubspotContactForm />
      <GooMap />
      <Footer />
      <ScrollToTopCom />
      <Whattsapp />
      {/* <Chat /> */}
      <GoogleTag />
    </main>
  );
}
