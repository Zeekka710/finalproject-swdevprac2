'use client';

import React, { useState, useEffect } from 'react';

export default function MapPage() {
  const bg = {
    backgroundImage: "url(/img/bg.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const testimonials = [
    "The massage services here are phenomenal. Highly recommend!",
    "Such a relaxing and rejuvenating experience. Will come back for sure.",
    "The staff is so friendly and professional. I feel so refreshed!",
    "A perfect escape from the chaos of daily life. The ambiance is incredibly soothing.",
    "My back pain has significantly improved after just one session. Thank you so much!",
    "The therapists here are truly experts. I felt like a new person afterward.",
    "From the moment I walked in, I was treated like royalty. Exceptional service!",
    "The hot stone massage was exactly what I needed to relieve stress. Absolutely loved it!",
    "The facility is spotless and well-maintained. You can feel the professionalism.",
    "I never realized how much a massage could help with my posture. Life-changing!",
    "Every detail here is designed for relaxation. Highly recommend their aromatherapy massages.",
    "Their Swedish massage technique is second to none. Worth every penny!",
    "The best wellness retreat I&apos;ve ever experienced. Can&apos;t wait to return!",
    "I loved the personalized care and attention to detail. Truly a five-star experience.",
    "Great value for the price! The combination packages are perfect for a full relaxation day.",
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]); // Added dependency

  return (
    <main
      className="min-h-screen items-center justify-between overflow-hidden"
      style={bg}
    >
      <div className="pl-[55px] mt-[120px] inline-grid grid-cols-2">
        {/* Left Section */}
        <div className="pt-[50px] mz-0 font-bold font-Inter text-[64px] text-[#FFFDD9]">
          <p>Find us and get in touch</p>
          <p className="text-[#F6CDA9]">We&apos;re here for you.</p>
        </div>

        {/* Contact Information */}
        <div
          className="absolute bottom-10 left-10 bg-white p-6 rounded-lg shadow-lg z-10 animate-slide-in-left"
        >
          <h3 className="font-bold text-xl mb-2">Contact Us</h3>
          <p className="text-gray-700 mb-1">
            <strong>Address:</strong> 123 Wellness Street, Bangkok
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Phone:</strong> 088-888-8888
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> contact@wellness.com
          </p>
          <div className="flex space-x-4">
            <a
              href="tel:+0888888888"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Call Us
            </a>
            <a
              href="mailto:contact@wellness.com"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="absolute bottom-10 right-10 bg-white p-6 rounded-lg shadow-lg z-10 animate-fade"
        >
          <h3 className="font-bold text-xl mb-2">What Our Clients Say</h3>
          <p className="text-gray-700 italic animate-testimonial-fade">
            &quot;{testimonials[currentTestimonial]}&quot;
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="absolute bottom-10 left-[35%] bg-white p-6 rounded-lg shadow-lg z-10 w-[50%] mb-[190px] ml-[200px] animate-bounce-in"
        >
          <h3 className="font-bold text-xl mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
