import type { NextPage } from 'next'
import { useState } from 'react'
import { Hero } from '../src/components/hero/hero';
import { Http } from '../src/services/http/http';
import { Input } from '../src/components/input/input'

interface squash {
  nano: string
}

const Home: NextPage = () => {
  const [url, setUrl] = useState('');
  const [nano, setNano] = useState('');

  const validate = (isValid: boolean, value: string) => {
    if (isValid) return setUrl(value)
    return setUrl('')
  }

  const submit = async (fullUrl: string) => {
    if (nano) return window.location.pathname = nano;

    const data: squash = await Http.get('/api/squash', { url: fullUrl });
    setNano(data.nano);
    setUrl(window.location.href + nano)
  }

  return (
    <main className='md:container md:mx-auto h-screen flex'>
      <div className='m-auto w-full mt-52 max-w-3xl'>
        <Hero title='We shorten urls .' subtitle="But there's only a 50% chance they work" />
        <form action="" className='flex mt-6' onSubmit={e => e.preventDefault()} >
          <Input
            type="url"
            placeholder="https://your.url"
            customClasses={`${nano ? 'w-0' : 'w-4/5 p-5'} border-2 border-gray-400 h-20 text-xl rounded-tr-none rounded-br-none`}
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => validate(e.target.validity.valid, e.target.value)} />

          <Input
            type="button"
            value={`${nano ? window.location.href + nano : 'submit'}`}
            customClasses={`${url ? 'bg-green-500' : 'bg-red-500'} -ml-2 ${nano ? 'w-full' : 'w-1/5'} cursor-pointer rounded-tl-none rounded-bl-none text-white font-medium `}
            onClickHandler={() => url && submit(url)} />
        </form>
      </div>
    </main>
  )
}

export default Home