import type { NextPage } from 'next'
import { useState } from 'react'


const Home: NextPage = () => {
  const [url, setUrl] = useState('Insert your URL here');
  const [nano, setNano] = useState();

  const submit = async (fullUrl: string) => {
    const url = new URL('/api/squash', window.location.href);
    url.search = new URLSearchParams({ url: fullUrl }).toString();
    const res = await fetch(url.toString());
    const data = await res.json();
    setNano(data.nano);
  }

  return (
    <div>
      <main className='md:container md:mx-auto h-screen flex'>
        <div className='m-auto w-full'>
          <h1 className='text-6xl text-center font-medium'>Gimme ya URL boi</h1>
          <input
            type="text"
            placeholder={url}
            className='w-full block border-2 border-gray-400 rounded p-3 h-20 text-2xl'
            onChange={text => setUrl(text.target.value)} />
          <input
            type='button'
            className='border-blue-800 border-2'
            value='click here to submit'
            onClick={() => submit(url)} />

          {nano &&
            <p>Your shortened URL is <a href={window.location.href + nano}>{window.location.href + nano}</a></p>
          }

        </div>
      </main>
    </div>
  )
}

export default Home