import React, { useEffect } from 'react';
function App() {
  const targetUrl = 'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/15/10/20250115102139-WYTZUKV3.json';

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = targetUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [targetUrl]);

  const handleRedirect = () => {
    window.location.href = targetUrl;
  };


  return (
    <div className='h-screen w-screen bg-[#111113] flex justify-center items-center'>
      <div className="text-center">
        <div className="text-center">
          <h1 style={{ fontFamily: 'Jost, sans-serif' }} className="text-white text-5xl">CryptoMate</h1>
          <p className="text-[#4C4C5A]">Sassy Crypto Companion – Helping You Stay on Chain!</p>
        </div>
        <button onClick={handleRedirect} className="bg-[#76A8F9] px-5 py-2 rounded-full mt-10 font-medium">Let's Begin</button>
      </div>
    </div>
  )
}

export default App
