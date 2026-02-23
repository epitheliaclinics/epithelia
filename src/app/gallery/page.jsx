'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to extract YouTube video ID
function getYoutubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'clinic', name: 'Our Clinic' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'before-after', name: 'Before & After' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'team', name: 'Our Team' },
    { id: 'videos', name: 'Videos' },
  ];

  const galleryImages = [
    // Add your images here
    {
      id: 1,
      category: 'clinic',
      src: '/images/gallery/clinic-1.jpg',
      alt: 'Epithelia Clinic Reception',
      title: 'Modern Reception Area'
    },
    // ... add more images
  ];

  //  YOUTUBE VIDEOS
  const galleryVideos = [
    {
      id: 1,
      category: 'videos',
      type: 'branding',
      title: 'Welcome to Epithelia Clinic',
      description: 'Experience our world-class facility',
      thumbnail: '/images/gallery/video-thumb-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=bz8OxFQAY_s',
    },
    {
      id: 2,
      category: 'videos',
      type: 'treatment',
      title: 'Laser Hair Reduction Procedure',
      description: 'See how our advanced laser treatment works',
      thumbnail: '/images/gallery/video-thumb-2.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=q56PGw3QK6A',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const filteredVideos = activeCategory === 'all' || activeCategory === 'videos'
    ? galleryVideos
    : [];

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

      {/* Videos Section */}
      {filteredVideos.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-aboreto text-3xl md:text-4xl text-center mb-12">
              Videos & Tours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-aboreto text-xl font-medium">{video.title}</h3>
                    <p className="text-gray-600 mt-1">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Images Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-aboreto text-3xl md:text-4xl text-center mb-12">
            {activeCategory === 'all' ? 'All Photos' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer relative aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-6">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Images */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* Video Modal with YouTube Support */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setSelectedVideo(null)}
          >
            &times;
          </button>
          <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* YouTube Embed */}
            {selectedVideo.videoUrl.includes('youtube.com') || selectedVideo.videoUrl.includes('youtu.be') ? (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo.videoUrl)}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              /* Regular MP4 Video */
              <video controls className="w-full" autoPlay>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>
            )}
            <div className="p-6 bg-white">
              <h3 className="font-aboreto text-2xl">{selectedVideo.title}</h3>
              <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}

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
