'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'clinic', name: 'Our Clinic' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'before-after', name: 'Before & After' },
    { id: 'videos', name: 'Videos' },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-aboreto text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Our Gallery
          </h1>
          <p className="font-figtree text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Explore Epithelia Clinic&apos;s modern facilities, advanced treatments, and real results
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 bg-primary sticky top-0 z-20 border-b border-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-secondary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-aboreto text-3xl md:text-4xl mb-6">
            Gallery Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;re curating an amazing collection of clinic photos, treatment results, 
            before &amp; after images, and videos. Stay tuned!
          </p>
          <Link
            href="/book"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-aboreto text-3xl md:text-4xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white text-lg mb-8">
            Book a consultation with our expert dermatologist Dr. Naresh Kumar
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-secondary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
