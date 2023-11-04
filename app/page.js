import Hero from '@/components/main/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen w-screen'>
      <div className='flex flex-col'>
        <Hero />
      </div>
    </main>
  )
}
