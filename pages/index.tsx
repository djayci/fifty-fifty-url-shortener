import type { NextPage } from 'next'
import { useState } from 'react'
import { Hero } from '../src/components/hero/hero';
import { Email } from '../src/services/validators/validators-email';

type Timer = ReturnType<typeof setTimeout>

const Home: NextPage = () => {
  const [url, setUrl] = useState('');
  const [nano, setNano] = useState();

  let timer: Timer;
  const validate = (input: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (Email.test(input)) {
        return setUrl(input)
      }
      return setUrl('');
    }, 500);
  }

  const submit = async (fullUrl: string) => {
    const url = new URL('/api/squash', window.location.href);
    url.search = new URLSearchParams({ url: fullUrl }).toString();
    const res = await fetch(url.toString());
    const data = await res.json();
    setNano(data.nano);
    setUrl(window.location.href + nano)
  }

  return (
    <main className='md:container md:mx-auto h-screen flex'>
      <div className='m-auto w-full mt-52 max-w-4xl'>
        <Hero title='We shorten urls .' subtitle="But there's only a 50% chance they work" />
        <form action="" className='flex mt-10'>
          <input
            type="url"
            placeholder='https://your.url'
            className='block border-2 border-gray-400 rounded p-5 h-20 outline-none text-xl rounded-tr-none rounded-br-none w-4/5'
            onChange={text => validate(text.target.value)} />
          <input
            type='button'
            className={`${url ? 'bg-green-500' : 'bg-red-500'} transition-colors w-1/5 rounded rounded-tl-none rounded-bl-none text-white font-medium `}
            value='submit'
            onClick={() => submit(url)} />
        </form>
        {/* 

        <div className='text-center bg-green-500 w-2/4 m-auto'><a href={window.location.href + nano}>{window.location.href + nano}</a></div> */}


      </div>
    </main>
  )
}

export default Home