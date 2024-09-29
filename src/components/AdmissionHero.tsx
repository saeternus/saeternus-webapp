import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AdmissionHero() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div>
      {' '}
      <div className='hero-background relative'>
        <div className='gradient-overlay absolute inset-0 z-10'></div>
        <div className='relative z-20 flex text-white'>
          <div className='lg:p-30 flex flex-col p-10 md:max-w-7xl md:p-20'>
            <motion.h1
              className='my-5 mb-5 text-2xl font-black md:my-10 md:text-6xl'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : -50 }}
              transition={{ duration: 1 }}
              ref={heroRef}
            >
              Empowering students worldwide to secure thriving careers with top
              universities
            </motion.h1>
            <motion.p
              className='text-left text-base md:max-w-4xl md:text-2xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: heroInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={heroRef}
            >
              At Saeternus, we are a dedicated team of professionals with a
              mission to help students across the globe in securing the best
              academic and professional opportunities. We offer step-by-step
              assistance tailored to your unique needs, keeping your larger
              career goals in mind. Our approach ensures that you feel confident
              and prepared as you navigate the competitive admissions process.
              <br /> <br />
              We&apos;ve gone through the application process and attended top
              US schools ourselves, and are happy to guide you throughout your
              journey even after you start your program, be it job search,
              internship or research opportunities.
            </motion.p>
            <motion.a
              className='mt-7 w-full rounded-md bg-white p-3 text-center font-bold text-black hover:bg-gray-100 md:w-[200px]'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: heroInView ? 1 : 0,
                scale: heroInView ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, delay: 1 }}
              href='#contact'
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionHero;