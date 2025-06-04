import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Cafe Delish',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'PozoResto transformed how we run our café. Orders are processed faster, and the analytics help us make better business decisions. Our staff loves the intuitive interface!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Manager, Fusion Bistro',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'We\'ve tried several POS systems, but PozoResto stands out for its reliability and excellent customer support. The inventory management features save us hours every week.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Owner, The Grill House',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Since implementing PozoResto, our table turnover has increased by 20%. The system is so efficient that our staff can focus more on customer service than manual processes.',
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Restaurant Owners
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our customers have to say about PozoResto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="h-5 w-5" 
                    fill={i < testimonial.rating ? '#F59E0B' : 'none'}
                    stroke={i < testimonial.rating ? '#F59E0B' : '#D1D5DB'}
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-amber-50 rounded-xl px-8 py-6 max-w-2xl text-center">
            <p className="text-amber-700 font-medium text-lg mb-4">
              Join over 2,000+ restaurants already using PozoResto
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;