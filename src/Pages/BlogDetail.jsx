import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import Profile1 from '../assets/Images/profile.png';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("Id", id);
    getBlogById();
  }, [id]);

  const getBlogById = () => {
    GlobalApi.getPostById(id).then(resp => {
      const item = resp.data; // Blogger returns the post directly
      const result = {
        id: item.id,
        title: item.title,
        desc: item.content,  // Blogger uses `content` (HTML)
        tag: "Blogger",      // Blogger posts don’t have `tag` by default
        coverImage: null     // you need to parse <img> from content if required
      };
      setPost(result);
      console.log("Result", result);
    });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
      <h3 className='text-[23px] font-bold'>{post.title}</h3>
      <div className='flex items-center mt-5'>
        <img src={Profile1} className='w-[35px] rounded-full' alt="author"/>
        <div className='ml-2'>
          <h3 className='font-bold'>Kugankuganesh</h3>
          <h3 className='text-gray-500'>{post.date}</h3>
        </div>
      </div>

      {post.coverImage && (
        <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full' alt="cover"/>
      )}

      <div
        className='leading-9 mt-5'
        dangerouslySetInnerHTML={{ __html: post.desc }}
      />
    </div>
  )
}

export default BlogDetail;
