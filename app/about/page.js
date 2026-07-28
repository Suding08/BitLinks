import React from 'react'

function About() {
  return (
    <div className='mx-auto bg-[#d2e823] p-2 flex flex-col gap-3'>
      <h1 className='font-bold text-[#254f1a] text-4xl mb-4'>About BitLinks</h1>
      <p className=' text-lg mb-6 text-[#254f1a]'>We are the most straightforward and easy to use URL shortner in the world. Most of the URL shortners will track your or ask you to give your details to login. We understand your needs and we are here to provide you the best experience of URL shortening without any hassle.</p>
      <div className="container text-black bg-[#2665d6] flex flex-col gap-4 rounded-4xl">
        <h2 className="font-bold md:text-5xl text-3xl text-center mb-14 text-[#d2e823]">What We Offer</h2>
        <div className="justify-center flex flex-row items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-like.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Easy</p>
            <p className="text-center text-white">BitLinks is easy and fast, enter the long link to get your shortened link</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-url.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Shortened</p>
            <p className="text-center text-white">Use any link, no matter what size, BitLinks always shortens</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-secure.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Secure</p>
            <p className="text-center text-white">It is fast and secure, our service has HTTPS protocol and data encryption</p>
          </div>
        </div>
        <div className="gap-5 justify-center flex flex-row items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-statistics.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Statistics</p>
            <p className="text-center text-white">Check the number of clicks that your shortened URL received</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-unique.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Reliable</p>
            <p className="text-center text-white">All links that try to disseminate spam, viruses and malware are deleted</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-200 rounded-full p-2" src="/icon-responsive.png" width={100} alt="" />
            <p className="font-bold text-center text-xl text-[#d2e823]">Devices</p>
            <p className="text-center text-white">Compatible with smartphones, tablets and desktop</p>
          </div>
        </div>
    </div>
    </div>
  ) 
}

export default About

