import Script from 'next/script';

const Chat = () => {
  return (
    <>
      <Script
        async
        src='https://js.hs-scripts.com/139691288.js'
        strategy='afterInteractive'
      />
    </>
  );
};

export default Chat;
