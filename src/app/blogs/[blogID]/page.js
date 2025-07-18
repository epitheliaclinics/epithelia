'use client';

import { useParams } from 'next/navigation';
import BlogSlugMain from '../components/BlogSlugMain';
import { blogListData } from '../../../data/blogList';
import TreatmentHero from '../../treatments/components/TreatmentHero';

export default function BlogDetailsPage() {
  const { blogID } = useParams();
  const blog = blogListData[blogID] || blogListData['1'];
  const blogImage = blog.image;

  if (!blog) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Not Found
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-y-10 md:gap-y-20'>
      <TreatmentHero
        backgroundImage={blogImage}
        bgImageClassName='!bg-center'
      />
      <BlogSlugMain blogData={blog} />
    </div>
  );
}
