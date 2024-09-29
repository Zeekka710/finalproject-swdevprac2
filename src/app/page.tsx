'use client'
import Image from "next/image";
import Banner from '@/components/Banner'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
          className='mt-[150px]'
          src="/img/km.png"
          alt="KM"
          width={400}
          height={37}
          priority
      />
      <div className='text-center py-[100px]'>
          <h1 className="mb-3 text-2xl font-semibold">
            Knowledge Management Website
          </h1>
          <p className='max-w-[30ch] text-xl opacity-50'>
            For IDE LaunchX Team Only
          </p>
        </div>
    </main>
  );
}
