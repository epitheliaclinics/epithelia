'use client';

import BlogMainHero from './components/BlogMainHero';
import BlogCard from './components/BlogCard';

export default function BlogPage() {
  return (
    <div className='min-h-screen relative bg-primary flex flex-col md:gap-y-20'>
      <BlogMainHero />
      <BlogCard />
    </div>
  );
}
