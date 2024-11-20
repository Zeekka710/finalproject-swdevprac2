'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const covers = ['/img/course/foot.png', '/img/course/body.png', '/img/course/hand.png'];
  const [currentIndex, setCurrentIndex] = useState(0); // State for current image
  const router = useRouter();

  // Handler for next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % covers.length);
  };

  // Handler for previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + covers.length) % covers.length);
  };

  return (
    <main className="min-h-screen items-center justify-between overflow-hidden" style={bg}>
      <div className="pl-[55px] mt-[120px] inline-grid grid-cols-2">
        {/* Left Section */}
        <div className="pt-[50px] mz-0 font-bold font-Inter text-[64px] text-[#FFFDD9]">
          <p>Treat your body and mind to the relaxation</p>
          <p className="text-[#F6CDA9]">they deserve.</p>
        </div>
        {/* Right Section */}
        <div className="relative z-30 w-full h-[512px] mt-[200px] flex flex-col items-center">
          <Image
            src={covers[currentIndex]}
            alt={`Product Picture ${currentIndex + 1}`}
            width={667}
            height={512}
            className="w-[80%] h-full object-cover rounded-lg"
          />
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-6 mt-4">
            <button
              onClick={handlePrevious}
              className="bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black px-3 py-2 rounded-full shadow hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="font-Inter -mt-[220px] pl-[50px] z-0"> {/* Adjusted spacing */}
          <div className="w-[554px] h-[100px] mix-blend-luminosity text-[#425466] text-lg font-normal tracking-wide leading-loose">
            Step into a world of relaxation and rejuvenation, where every detail is designed to provide you with an exceptional wellness experience. 
            Our skilled therapists specialize in a variety of massage techniques, from deep tissue to Swedish and hot stone, 
            each tailored to meet your unique needs.
          </div>
        </div>
      </div>
    </main>
  );
}
