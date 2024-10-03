'use client';

import React from 'react';
import {
  NotebookText,
  Plane,
  Globe,
  UserRoundPen,
  MessageSquare,
  Pencil,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const services = [
  {
    icon: <UserRoundPen className='h-10 w-10 text-primary' />,
    title: 'Profile Evaluation',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.1,
  },
  {
    icon: <NotebookText className='h-10 w-10 text-primary' />,
    title: 'College Shortlisting',
    description:
      "Customizing your essay to align with the admission committee's mindset for each college. Do cillum culpa labore laboris incididunt velit ipsum.",
    delay: 0.3,
  },
  {
    icon: <MessageSquare className='h-10 w-10' />,
    title: 'MS/PhD interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.5,
  },
  {
    icon: <Plane className='h-10 w-10 text-primary' />,
    title: 'Visa Interviews',
    description:
      'Track your expenses effortlessly with our intuitive budget tracking tools. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.2,
  },
  {
    icon: <Globe className='h-10 w-10 text-primary' />,
    title: 'End-to-End Guidance',
    description:
      'For pathway into Industry and Academia. Do cillum culpa labore laboris incididunt velit ipsum.',
    delay: 0.4,
  },
  {
    icon: <Pencil className='h-10 w-10' />,
    title: 'Tailored SOP/Essay',
    description:
      "In this service, we camouflage your weak areas and accentuate your strengths, customizing your essay to align with the admission committee's mindset for each college.",
    delay: 0.6,
  },
];

interface ServiceProp {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
  };
}

const ServiceCard = ({ service }: ServiceProp) => (
  <div className='mb-6 mt-10 flex flex-col items-center space-y-6 text-center sm:flex-row sm:space-x-6 sm:text-left'>
    <div className='h-13 w-13 flex  items-center justify-center rounded-full bg-gray-50 p-3 text-primary sm:h-20 sm:w-20 sm:p-5'>
      {service.icon}
    </div>
    <div className='flex-grow'>
      <h3 className='mb-2 text-2xl font-bold text-gray-900 lg:text-3xl'>
        {service.title}
      </h3>
      <p className='text-md text-gray-700 lg:text-lg'>{service.description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftColumnServices = services.slice(0, 3);
  const rightColumnServices = services.slice(3);

  return (
    <div className='mx-auto my-auto flex h-[1650px] max-w-7xl items-center p-4 sm:h-[1200px] md:h-[900px] md:p-8'>
      <div className='w-full'>
        <h2 className='mb-10 text-center text-4xl font-extrabold leading-tight text-primary sm:text-5xl md:mb-14 '>
          Services
        </h2>

        <div className='grid grid-cols-1 gap-x-4 px-2 md:grid-cols-2 md:gap-x-8 md:px-4'>
          <div>
            {leftColumnServices.map((service, index) => (
              <motion.div
                variants={cardVariants}
                initial='hidden'
                animate={card2InView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: service.delay }}
                ref={card1Ref}
                key={index}
              >
                <ServiceCard key={index} service={service} />
              </motion.div>
            ))}
          </div>

          <div>
            {rightColumnServices.map((service, index) => (
              <motion.div
                variants={cardVariants}
                initial='hidden'
                animate={card2InView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: service.delay }}
                ref={card2Ref}
                key={index + 3}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
