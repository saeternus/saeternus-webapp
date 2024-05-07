import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Service';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mt-28 flex flex-col items-center justify-center text-center sm:mt-40'>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Innovating for your
          <span className='text-primary'> success</span>
        </h1>
        <h2 className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          <span className='text-primary'>Your success is our success</span>. We
          are committed to delivering innovative solutions and exceptional
          service to help you achieve your goals.{' '}
          <span className='text-primary'>
            Let us help you turn your vision into a reality
          </span>
          .
        </h2>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/courses'
        >
          Get started
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
      </MaxWidthWrapper>
      <div className='relative isolate'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>

      {/* Feature section */}
      <div className='mx-auto flex max-w-5xl flex-col items-center justify-center sm:mt-56'>
        <div className='mb-12 px-6 text-center lg:px-8'>
          <h2 className='mt-2 text-4xl font-bold text-gray-900 sm:text-5xl'>
            What do we <span className='text-primary'>do</span>?
          </h2>
        </div>
      </div>

      <Services />

      {/* Testimonials section */}
      <div className='mx-auto max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 text-4xl font-bold text-gray-900 sm:text-5xl'>
              What are <span className='text-primary'> our clients </span>
              saying?
            </h2>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}
