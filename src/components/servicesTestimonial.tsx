"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface Testimonial {
  imageSrc: string;
  name: string;
  degree: string;
  content: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    imageSrc: "/images/placeholder.png",
    name: "Saurabh Parulekar",
    degree: "MS in Electrical Engineering",
    content: "Suggest Yocket Premium for students who aspire to study MS",
    review: "review content"
  },
  {
    imageSrc: "/images/placeholder.png",
    name: "Aditi Sharma",
    degree: "MBA in Finance",
    content: "Yocket helped me navigate through my application process seamlessly.",
    review: "review content"
  },
  {
    imageSrc: "/images/placeholder.png",
    name: "Rahul Mehta",
    degree: "PhD in Computer Science",
    content: "The guidance I received was invaluable for my research proposals.",
    review: "review content"
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ imageSrc, name, degree, content, review }) => (
  <article className="flex flex-col items-center mx-20 transition-opacity duration-500 ease-in-out">
    <div className="flex gap-2 text-center text-primary whitespace-nowrap">
      <Image
        width={200}
        height={200}
        loading="lazy"
        src={imageSrc}
        alt={`${name}'s profile`}
        className="shrink-0 aspect-square w-[50px] rounded-full"
      />
    </div>
    <p className="self-end mt-4 text-center italic font-light text-black">{content}</p>
    <h4 className="text-base mt-4 text-primary">{name}</h4>
    <p className="text-base text-primary">{degree}</p>
  </article>
);

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTestimonialChange = (direction: 'next' | 'prev') => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'next') {
          return (prevIndex + 1) % testimonials.length;
        } else {
          return (prevIndex - 1 + testimonials.length) % testimonials.length;
        }
      });
      setFade(false);
    }, 300); // Match this with the duration of the fade-out effect
  };

  return (
    <section className="my-10 flex flex-col items-center px-5 text-xl font-semibold mx-64 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex gap-5 justify-between items-center px-10 pt-16 pb-9 ">
        <button 
          onClick={() => handleTestimonialChange('prev')} 
          className="text-black hover:text-primary transition-transform transform hover:scale-105"
        >
          &#10621;
          &#10167;
          &#8592;
          &#10554; {/* Left arrow */}
        </button>
        
        <div className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>
        
        <button 
          onClick={() => handleTestimonialChange('next')} 
          className="text-black hover:text-primary transition-transform transform hover:scale-105"
        >
          &#10620;
          &#10168;
          &#8594; 
          &#10555;{/* Right arrow */}
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`block mb-4 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
