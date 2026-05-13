"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Shorten() {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generted, setGenerted] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {

        setGenerted(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })

      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto mx-w-lg bg-purple-100 my-12 p-8 rounded-xl flex flex-col gap-4 w-100'>
      <h1 className='font-bold text-xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>

        <input className='px-4 py-2 rounded-md focus:outline-purple-500' type="text"
          value={url}
          placeholder='Enter your URL'
          onChange={e => { seturl(e.target.value) }} />

        <input className='px-4 py-2 focus:outline-purple-500 rounded-md' type="text"
          value={shorturl}
          placeholder='Enter Your preferred short URL text'
          onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 my-3 text-white'>Generate</button>
      </div>
      {generted && <>
      <span className='font-bold text-lg'>Your Link</span>
      <code><Link target="_blank" href={generted}>{generted}</Link></code>
      </>
    }
    </div>

    
  )
}

export default Shorten
