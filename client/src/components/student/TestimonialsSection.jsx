import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800 text-center">Testimonials</h2>
      <p className="md:text-base text-gray-500 mt-3 text-center">
        Hear from our learners as they share their journeys of transformation, success, and how our 
        <br className="hidden md:block" /> platform has made a difference in their lives.
      </p>

      <div className="grid grid-cols-auto gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div 
            className="text-sm text-left border border-gray-300 pb-6 rounded-lg bg-white shadow-md shadow-gray-200 overflow-hidden" 
            key={index}
          >
            {/* User Info Section */}
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-100">
              <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            {/* Rating & Feedback Section */}
            <div className="p-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img 
                    className="h-5" 
                    key={i} 
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
                    alt="star" 
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-4 leading-relaxed">{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
