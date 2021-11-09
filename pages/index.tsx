import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>50/50 url shortener</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='md:container md:mx-auto h-screen flex'>
        <div className='m-auto w-full'>
          <h1 className='text-6xl text-center font-medium'>Gimme ya URL boi</h1>
          <input type="text" placeholder="something here" className='w-full block border-2 border-gray-400 rounded p-3 h-20 text-2xl' />
          <button className='border-blue-800 border-2'>Submit</button>
        </div>
      </main>
    </div>
  )
}

export default Home
